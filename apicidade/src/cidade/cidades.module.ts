import { Module } from '@nestjs/common';
import { CidadesController } from './cidades.controller';
import { CidadesService } from './cidades.service';
import { DatabaseModule } from 'src/database/database.module';
import { cidadeProviders } from './cidades.providers';
import { ufProviders } from './uf.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...cidadeProviders, ...ufProviders, CidadesService],
  exports: [...cidadeProviders, ...ufProviders],
  controllers: [CidadesController],
})
export class CidadesModule {}
