import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/**/**/entities/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTransactionMode: 'all',
  synchronize: false,
  migrationsRun: true,
  // options: { encrypt: false },
  logging: false, // log de requisições exibidas no console de desenvolvimento (prod / dev)
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
