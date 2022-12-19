import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cidade } from './cidade.entity';

@Entity('ufs')
export class Uf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @ManyToMany(() => Cidade, (cidade) => cidade.ufs)
  cidade: Cidade[];
}
