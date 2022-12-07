import { Module } from '@nestjs/common';
import { CidadesController } from './cidades.controller';
import { CidadesService } from './cidades.service';
import { Cidade } from './entities/cidade.entity/cidade.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade])],
  controllers: [CidadesController],
  providers: [CidadesService],
})
export class CidadesModule {}
