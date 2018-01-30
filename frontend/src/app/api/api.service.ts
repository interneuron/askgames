import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';

@Injectable()
export class ApiService {
  private _token: string;

  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    const http = httpLink.create({uri: '/graphql'});
    const authMiddleware = new ApolloLink((operation, forward) => {
      if (this._token) {
        operation.setContext(({headers}) => ({
          headers: (headers || new HttpHeaders()).append('auth-token', this._token),
        }));
      }
      return forward(operation);
    });
    apollo.create({
      link: from([authMiddleware, http]),
      cache: new InMemoryCache(),
    });
  }

  set token(token: string) {
    this._token = token;
  }
}
