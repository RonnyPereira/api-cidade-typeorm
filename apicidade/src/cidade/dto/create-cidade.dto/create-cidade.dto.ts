import { IsString } from 'class-validator';

export class CreateCidadeDto {
  @IsString()
  readonly nome_cidade: string;
  @IsString()
  readonly ufs: string[];
}
