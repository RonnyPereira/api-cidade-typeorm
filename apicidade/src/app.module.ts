import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CidadesModule } from './cidade/cidades.module';

@Module({
  imports: [CidadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// TypeOrmModule.forRoot({
//  type: 'postgres',
//  host: 'localhost',
//  port: 5432,
// username: 'postgres',
// password: 'postgres',
// database: 'postgres',
//   autoLoadEntities: true,
//   synchronize: true,
// }),
