import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Init1630486724726 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
