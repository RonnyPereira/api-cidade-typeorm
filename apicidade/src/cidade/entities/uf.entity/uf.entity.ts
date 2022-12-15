import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cidade } from '../cidade.entity/cidade.entity';

@Entity('ufs')
export class Uf {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany(() => Cidade, (cidade) => cidade.uf)
  cidade: Cidade[];
}
