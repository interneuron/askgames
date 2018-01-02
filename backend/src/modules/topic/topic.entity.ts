import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'Topic',
})
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gameId: number;

  @Column()
  accountId: number;

  @Column()
  datetime: Date;

  @Column({length: 250})
  title: string;

  @Column('text')
  text: string;

  @Column()
  rate: number;

  @Column()
  block: boolean;
}
