import {MigrationInterface, QueryRunner} from "typeorm";

export class True1587075769273 implements MigrationInterface {
    name = 'True1587075769273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reviews" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "created_by_id" character varying NOT NULL, "updated_at" TIMESTAMP DEFAULT now(), "updated_by_id" character varying, "deleted_at" TIMESTAMP, "deleted_by_id" character varying, "version" integer NOT NULL, "collection_item_id" character varying NOT NULL, "rating" character varying, "title" character varying, "review_text" character varying, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "salt" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "account_settings" jsonb`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_items" ADD "plays" integer DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`, undefined);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_fc090d3e6b0a3b369f03d9aa673" FOREIGN KEY ("collection_item_id") REFERENCES "collection_items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_fc090d3e6b0a3b369f03d9aa673"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_items" DROP COLUMN "plays"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "account_settings"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "salt"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`DROP TABLE "reviews"`, undefined);
    }

}
