import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Uf } from '../uf.entity/uf.entity';

@Entity('cidade')
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome_cidade: string;

  @JoinTable()
  @ManyToOne(() => Uf, (uf) => uf.cidade, {
    cascade: true,
  })
  uf: string;
}
