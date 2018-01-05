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
  name: string;
}
