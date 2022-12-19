import { Module } from '@nestjs/common';
import { CidadesController } from './cidades.controller';
import { CidadesService } from './cidades.service';
import { Cidade } from './entities/cidade.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Uf } from './entities/uf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade, Uf])],
  controllers: [CidadesController],
  providers: [CidadesService],
})
export class CidadesModule {}
