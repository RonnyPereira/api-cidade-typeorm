import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Uf } from './uf.entity';

@Entity('cidade')
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome_cidade: string;

  @JoinTable()
  @ManyToMany(() => Uf, (uf) => uf.cidade, {
    cascade: true,
  })
  ufs: Uf[];
}
