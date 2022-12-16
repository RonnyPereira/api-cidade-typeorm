import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cidade')
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome_cidade: string;
  @Column('json', { nullable: true })
  uf: string[];
}
