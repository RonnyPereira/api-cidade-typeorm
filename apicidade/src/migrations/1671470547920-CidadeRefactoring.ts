import { MigrationInterface, QueryRunner } from 'typeorm';

export class CidadeRefactoring1671470547920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cidade" ALTER COLUMN "nome_cidade" RENAME TO "nome"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cidade" ALTER COLUMN "nome" RENAME TO "nome_cidade"`,
    );
  }
}
