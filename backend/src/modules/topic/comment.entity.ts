import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'TopicComment',
})
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topicId: number;

  @Column()
  answerId: number;

  @Column()
  accountId: number;

  @Column()
  datetime: Date;

  @Column('text')
  text: string;

  @Column()
  rate: number;
}
