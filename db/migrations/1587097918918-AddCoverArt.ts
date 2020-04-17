import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCoverArt1587097918918 implements MigrationInterface {
    name = 'AddCoverArt1587097918918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" ADD "cover_art" character varying`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "cover_art"`, undefined);
    }

}
