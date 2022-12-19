import { DataSource } from 'typeorm';
import { Cidade } from './entities/cidade.entity';

export const cidadeProviders = [
  {
    provide: 'CIDADE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cidade),
    inject: ['DATA_SOURCE'],
  },
];
