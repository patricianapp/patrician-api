import {MigrationInterface, QueryRunner} from "typeorm";

export class True1587076386589 implements MigrationInterface {
    name = 'True1587076386589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "created_by_id" character varying NOT NULL, "updated_at" TIMESTAMP DEFAULT now(), "updated_by_id" character varying, "deleted_at" TIMESTAMP, "deleted_by_id" character varying, "version" integer NOT NULL, "username" character varying NOT NULL, "email" character varying, "password" character varying NOT NULL, "salt" character varying NOT NULL, "bio" character varying, "account_settings" jsonb, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "items" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "created_by_id" character varying NOT NULL, "updated_at" TIMESTAMP DEFAULT now(), "updated_by_id" character varying, "deleted_at" TIMESTAMP, "deleted_by_id" character varying, "version" integer NOT NULL, "mbid" character varying, "rym_id" integer, "spotify_id" character varying, "title" character varying NOT NULL, "disambiguation" character varying, "artist" character varying NOT NULL, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "created_by_id" character varying NOT NULL, "updated_at" TIMESTAMP DEFAULT now(), "updated_by_id" character varying, "deleted_at" TIMESTAMP, "deleted_by_id" character varying, "version" integer NOT NULL, "collection_item_id" character varying NOT NULL, "rating" character varying, "title" character varying, "review_text" character varying, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "collection_items" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "created_by_id" character varying NOT NULL, "updated_at" TIMESTAMP DEFAULT now(), "updated_by_id" character varying, "deleted_at" TIMESTAMP, "deleted_by_id" character varying, "version" integer NOT NULL, "custom_title" character varying, "custom_artist" character varying, "user_id" character varying NOT NULL, "item_details_id" character varying NOT NULL, "plays" integer DEFAULT 0, CONSTRAINT "PK_5f299da96958a920ab58871ea57" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_fc090d3e6b0a3b369f03d9aa673" FOREIGN KEY ("collection_item_id") REFERENCES "collection_items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_items" ADD CONSTRAINT "FK_11904cd0bab7d35969089548db8" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_items" ADD CONSTRAINT "FK_08f049748e8a0c61e1c7b247028" FOREIGN KEY ("item_details_id") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collection_items" DROP CONSTRAINT "FK_08f049748e8a0c61e1c7b247028"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_items" DROP CONSTRAINT "FK_11904cd0bab7d35969089548db8"`, undefined);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_fc090d3e6b0a3b369f03d9aa673"`, undefined);
        await queryRunner.query(`DROP TABLE "collection_items"`, undefined);
        await queryRunner.query(`DROP TABLE "reviews"`, undefined);
        await queryRunner.query(`DROP TABLE "items"`, undefined);
        await queryRunner.query(`DROP TABLE "users"`, undefined);
    }

}
