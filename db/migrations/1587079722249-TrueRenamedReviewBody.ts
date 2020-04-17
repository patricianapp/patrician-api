import {MigrationInterface, QueryRunner} from "typeorm";

export class TrueRenamedReviewBody1587079722249 implements MigrationInterface {
    name = 'TrueRenamedReviewBody1587079722249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" RENAME COLUMN "review_text" TO "body"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" RENAME COLUMN "body" TO "review_text"`, undefined);
    }

}
