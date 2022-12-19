import { DataSource } from 'typeorm';
import { Uf } from './entities/uf.entity';

export const ufProviders = [
  {
    provide: 'UF_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Uf),
    inject: ['DATA_SOURCE'],
  },
];
