import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'TopicAnswer',
})
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topicId: number;

  @Column()
  accountId: number;

  @Column()
  datetime: Date;

  @Column('text')
  text: string;

  @Column()
  rate: number;

  @Column()
  block: boolean;
}
