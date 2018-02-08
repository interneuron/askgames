import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'AuthAccount',
})
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  email: string;

  @Column({length: 250})
  password: string;

  @Column({length: 50})
  googleId: string;

  @Column({length: 50})
  vkId: string;

  @Column({length: 50})
  name: string;

  @Column({length: 50})
  displayName: string;

  @Column({length: 50})
  picture: string;

  @Column({length: 250})
  background: string;

  @Column({type: 'text'})
  about: string;

  @Column({length: 100})
  socialVk: string;

  @Column({length: 100})
  socialFb: string;

  @Column({length: 100})
  socialYt: string;

  @Column({length: 100})
  socialTw: string;

  @Column({length: 100})
  website: string;
}
