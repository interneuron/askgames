import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'DirectoryGame',
})
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 500})
  name: string;

  @Column('text')
  aliases: string;

  @Column()
  additionalAliases: string;

  @Column()
  block: boolean;
}
