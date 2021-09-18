import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Init1629871269049 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
