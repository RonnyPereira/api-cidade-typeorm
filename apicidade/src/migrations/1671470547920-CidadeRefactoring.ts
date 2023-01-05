import { MigrationInterface, QueryRunner } from 'typeorm';

export class CidadeRefactoring1671470547920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cidade" RENAME COLUMN "nome_cidade" TO "nome_cidade"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cidade" RENAME COLUMN "nome" TO "nome_cidade"`,
    );
  }
}
