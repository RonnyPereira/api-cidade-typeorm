import { IsString } from 'class-validator';
import { Uf } from 'src/cidade/entities/uf.entity/uf.entity';

export class CreateCidadeDto {
  @IsString()
  readonly nome_cidade: string;
  @IsString()
  readonly uf: number;
}

export class UpdateCidadeDto {
  readonly nome_cidade: string;
  readonly uf: Uf;

  constructor(nome, estado) {
    this.nome_cidade = nome;
    this.uf = estado;
  }
}
