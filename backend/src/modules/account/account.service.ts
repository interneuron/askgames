import { Component, Inject } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import * as request from 'request';
import { Repository } from 'typeorm';
import { config } from '../../config';
import { uuid } from '../../util/uuid';
import { SavePictureService } from '../helpers/save-picture.service';
import { StateService } from '../state/state.service';
import { Account } from './account.entity';
import { accountRepoToken, CreateSessionResponse } from './meta';

@Component()
export class AccountService {
  constructor(
      @Inject(accountRepoToken) private readonly accountRepo: Repository<Account>,
      private state: StateService,
      private savePicture: SavePictureService,
  ) {

  }

  async findAll(): Promise<Account[]> {
    return await this.accountRepo.find({take: 50});
  }

  async findById(id: number): Promise<Account> {
    return await this.accountRepo.findOne({id});
  }

  async findByName(name: string): Promise<Account> {
    return await this.accountRepo.findOne({name});
  }

  async createSession(email: string, password: string): Promise<CreateSessionResponse> {
    const account = await this.accountRepo.findOne({email});
    this.state.client.keys('*', function (err, res) {
    });
    if (account) {
      // const hash = hashSync(password); <-- need for registration
      if (compareSync(password, account.password)) {
        return {
          accountId: account.id,
          token: this.genSession(account.id),
        };
      } else {
        return {
          error: 'invalid_email_or_password',
        }
      }
    } else {
      return {
        error: 'invalid_email_or_password',
      }
    }
  }

  async createGoogleSession(id: string, access_token: string): Promise<CreateSessionResponse> {
    return new Promise((resolve) => {
      const url = `https://www.googleapis.com/oauth2/v1/userinfo?client_id=${config.google.clientId}&access_token=${access_token}`;
      request(url, async (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const authData: {id: string, email: string, name: string} = JSON.parse(body);
          console.log(authData);
          if (id === authData.id) {
            const account = await this.accountRepo.findOne({googleId: authData.id});
            if (account) {
              resolve({
                accountId: account.id,
                token: this.genSession(account.id),
              });
            }
            else {
              const account = new Account();
              account.googleId = authData.id;
              account.email = authData.email;
              account.displayName = authData.name;
              if (!account.displayName) {
                throw new Error('Name is not present in google auth data!');
              }
              await this.accountRepo.save(account);
              resolve({
                accountId: account.id,
                token: this.genSession(account.id),
              });
            }
          } else {
            resolve({
              error: 'invalid_google_auth',
            });
          }
        }
        else {
          resolve({
            error: 'invalid_google_auth',
          });
        }
      });
    });
  }

  async isAuth(token: string): Promise<number | null> {
    return new Promise<number | null>(resolve => {
      this.state.client.get(token, function (err, res) {
        if (res) {
          resolve(parseInt(res, 10));
        } else {
          resolve(null);
        }
      });
    });
  }

  async removeToken(token: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.state.client.del(token, function (err, res) {
        resolve(!!res);
      });
    });
  }

  async updateSettings(id: number, form: {displayName: string, about: string, pictureData: string}): Promise<Account> {
    const account = await this.accountRepo.findOne({id});
    if (account) {
      if (form.displayName) {
        account.displayName = form.displayName;
        account.about = form.about;
        if (form.pictureData) {
          // @todo clear picture
          account.picture = this.savePicture.save('pictures/profile', account.id, form.pictureData);
        }
        return this.accountRepo.save(account);
      } else {
        throw new Error('Display name should be passed!');
      }
    }
  }

  private genSession(accountId: number): string {
    const token = uuid();
    // @todo add EXPIRE
    this.state.client.set(token, accountId.toString(), function (err, res) {
    });
    return token;
  }
}
