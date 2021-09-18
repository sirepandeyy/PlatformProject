"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1629871269049 = void 0;
class Init1629871269049 {
    constructor() {
        this.name = 'Init1629871269049';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "features " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "feature_id" integer, "feature_name" character varying, "base_feature_id" integer, "feature_description" character varying, "feature_key" character varying, "operations" character varying, "feature_type" integer, "appsId" integer, CONSTRAINT "UQ_3577cb0f7f21b6673f107f4ec9a" UNIQUE ("id"), CONSTRAINT "PK_3577cb0f7f21b6673f107f4ec9a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "address_id" integer, "start_date" TIMESTAMP, "Expiry_date" TIMESTAMP, "client_key" character varying, "client_name" character varying, "decsription" character varying, "contact_id" integer, CONSTRAINT "UQ_4502c43b0e978c1ccb2d1b3f80d" UNIQUE ("id"), CONSTRAINT "PK_4502c43b0e978c1ccb2d1b3f80d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenant_app_features " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "featuresId" integer, "tenantAppsId" integer, CONSTRAINT "UQ_b43ac75d29d367bfc57809d5c2a" UNIQUE ("id"), CONSTRAINT "PK_b43ac75d29d367bfc57809d5c2a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenant_user_app_alerts " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "alert_type" character varying, "alert_name" character varying, "alert_desc" character varying, "from_date_time" TIMESTAMP, "alert_duration_type" character varying, "subscription_date" TIMESTAMP, "has_unsubscribed" boolean, "tenant_user_id" integer, "user_id" integer, "tenantUserAppsId" integer, CONSTRAINT "UQ_4108b72f4247bd292bbaf15cea3" UNIQUE ("id"), CONSTRAINT "PK_4108b72f4247bd292bbaf15cea3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenant_user_app_roles " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "rolesId" integer, "tenantUserAppsId" integer, CONSTRAINT "UQ_3574bcf90d195677adc71fe1003" UNIQUE ("id"), CONSTRAINT "PK_3574bcf90d195677adc71fe1003" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenant_user_apps " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "tenant_user_app_permissions" character varying, "tenantAppsId" integer, "tenantUsersId" integer, CONSTRAINT "UQ_ac0451ccd1f9c0545d303b70a13" UNIQUE ("id"), CONSTRAINT "PK_ac0451ccd1f9c0545d303b70a13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenant_apps " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "connection_string" character varying, "all_features" boolean, "appsId" integer, "tenantsId" integer, CONSTRAINT "UQ_7d8a0bf779af0f94dc5348a1be0" UNIQUE ("id"), CONSTRAINT "PK_7d8a0bf779af0f94dc5348a1be0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenants " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "tenant_name" character varying, "description" character varying, "alias" character varying, "published_from" TIMESTAMP, "published_till" TIMESTAMP, "is_complete" boolean, "site_image_url_path" character varying, "status_id" integer, "tenant_admin_email" character varying, "clientsId" integer, CONSTRAINT "UQ_416ce96e2312df22e5c2cfeddca" UNIQUE ("id"), CONSTRAINT "PK_416ce96e2312df22e5c2cfeddca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenant_users " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "identity_provider_subscriber_id" character varying, "usersId" integer, "tenantsId" integer, CONSTRAINT "UQ_66d2c3a23ae6ec3b8de3a1ac9eb" UNIQUE ("id"), CONSTRAINT "PK_66d2c3a23ae6ec3b8de3a1ac9eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "first_name" character varying, "email" character varying, "phone" integer, CONSTRAINT "UQ_d9b0d3777428b67f460cf8a9b14" UNIQUE ("id"), CONSTRAINT "PK_d9b0d3777428b67f460cf8a9b14" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "feature_permissions " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "featuresId" integer, "rolesId" integer, "usersId" integer, CONSTRAINT "UQ_2c1beb9f4c0297187747bd6a865" UNIQUE ("id"), CONSTRAINT "PK_2c1beb9f4c0297187747bd6a865" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "role_name" character varying, CONSTRAINT "UQ_d40adf1f0bda238c39fdbf8ab10" UNIQUE ("id"), CONSTRAINT "PK_d40adf1f0bda238c39fdbf8ab10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_roles " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "app_role_permisssions" character varying, "appsId" integer, "rolesId" integer, CONSTRAINT "UQ_0264372a602ba91d7220a982f62" UNIQUE ("id"), CONSTRAINT "PK_0264372a602ba91d7220a982f62" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "apps " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "app_name" character varying, "app_description" character varying, CONSTRAINT "UQ_c6106e070775a5695a03644b8d1" UNIQUE ("id"), CONSTRAINT "PK_c6106e070775a5695a03644b8d1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_messages " ("id" SERIAL NOT NULL, "creation_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "modified_date" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" integer, "modified_by" integer, "row_version" integer, "user_id" integer, "tenant_id" integer, "is_notification" boolean, "subject" character varying, "message_body" character varying, "is_read" boolean, "appsId" integer, CONSTRAINT "UQ_01a2c9b5246859a272500f73dc7" UNIQUE ("id"), CONSTRAINT "PK_01a2c9b5246859a272500f73dc7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "features " ADD CONSTRAINT "FK_c7c4ded69fb64662d2658fbb1bd" FOREIGN KEY ("appsId") REFERENCES "apps "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_app_features " ADD CONSTRAINT "FK_97c00127b2796c081e3d1b194b2" FOREIGN KEY ("featuresId") REFERENCES "features "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_app_features " ADD CONSTRAINT "FK_491fa2dad3876d82ff5d891f7e0" FOREIGN KEY ("tenantAppsId") REFERENCES "features "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_user_app_alerts " ADD CONSTRAINT "FK_631e7d3ff82e52b48e317b3bff4" FOREIGN KEY ("tenantUserAppsId") REFERENCES "tenant_user_apps "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_user_app_roles " ADD CONSTRAINT "FK_9f902867fc6a1b928acb32ea5f1" FOREIGN KEY ("rolesId") REFERENCES "roles "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_user_app_roles " ADD CONSTRAINT "FK_1faa1e2f81ddf2bd945a24c8500" FOREIGN KEY ("tenantUserAppsId") REFERENCES "tenant_user_apps "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_user_apps " ADD CONSTRAINT "FK_581edd2218543bc22a235a33a8f" FOREIGN KEY ("tenantAppsId") REFERENCES "tenant_apps "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_user_apps " ADD CONSTRAINT "FK_c712805006d68926599bac7ff2e" FOREIGN KEY ("tenantUsersId") REFERENCES "tenant_users "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_apps " ADD CONSTRAINT "FK_e6df611b5f89b80fedf82cae192" FOREIGN KEY ("appsId") REFERENCES "apps "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_apps " ADD CONSTRAINT "FK_d1f9a817b7d4e3d7c1b1477f316" FOREIGN KEY ("tenantsId") REFERENCES "tenants "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenants " ADD CONSTRAINT "FK_f8a06a5fd114c705686a22b02e4" FOREIGN KEY ("clientsId") REFERENCES "clients "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_users " ADD CONSTRAINT "FK_fda6bc62ad1ce0b0ffb6e72ba4f" FOREIGN KEY ("usersId") REFERENCES "users "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenant_users " ADD CONSTRAINT "FK_00dd3d184b29a9e68142332a822" FOREIGN KEY ("tenantsId") REFERENCES "tenants "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feature_permissions " ADD CONSTRAINT "FK_05317c74cb16453843333c7d1cd" FOREIGN KEY ("featuresId") REFERENCES "features "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feature_permissions " ADD CONSTRAINT "FK_75214ab79abb9a98337b3fad528" FOREIGN KEY ("rolesId") REFERENCES "roles "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feature_permissions " ADD CONSTRAINT "FK_047327fa8a1c6dc199273f73c2c" FOREIGN KEY ("usersId") REFERENCES "users "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_roles " ADD CONSTRAINT "FK_553e5e8f46e908647353d156d0e" FOREIGN KEY ("appsId") REFERENCES "apps "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_roles " ADD CONSTRAINT "FK_46e79312262cdae7421b476af01" FOREIGN KEY ("rolesId") REFERENCES "roles "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_messages " ADD CONSTRAINT "FK_17d85cb21fd0095b313fb36087c" FOREIGN KEY ("appsId") REFERENCES "apps "("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "app_messages " DROP CONSTRAINT "FK_17d85cb21fd0095b313fb36087c"`);
        await queryRunner.query(`ALTER TABLE "app_roles " DROP CONSTRAINT "FK_46e79312262cdae7421b476af01"`);
        await queryRunner.query(`ALTER TABLE "app_roles " DROP CONSTRAINT "FK_553e5e8f46e908647353d156d0e"`);
        await queryRunner.query(`ALTER TABLE "feature_permissions " DROP CONSTRAINT "FK_047327fa8a1c6dc199273f73c2c"`);
        await queryRunner.query(`ALTER TABLE "feature_permissions " DROP CONSTRAINT "FK_75214ab79abb9a98337b3fad528"`);
        await queryRunner.query(`ALTER TABLE "feature_permissions " DROP CONSTRAINT "FK_05317c74cb16453843333c7d1cd"`);
        await queryRunner.query(`ALTER TABLE "tenant_users " DROP CONSTRAINT "FK_00dd3d184b29a9e68142332a822"`);
        await queryRunner.query(`ALTER TABLE "tenant_users " DROP CONSTRAINT "FK_fda6bc62ad1ce0b0ffb6e72ba4f"`);
        await queryRunner.query(`ALTER TABLE "tenants " DROP CONSTRAINT "FK_f8a06a5fd114c705686a22b02e4"`);
        await queryRunner.query(`ALTER TABLE "tenant_apps " DROP CONSTRAINT "FK_d1f9a817b7d4e3d7c1b1477f316"`);
        await queryRunner.query(`ALTER TABLE "tenant_apps " DROP CONSTRAINT "FK_e6df611b5f89b80fedf82cae192"`);
        await queryRunner.query(`ALTER TABLE "tenant_user_apps " DROP CONSTRAINT "FK_c712805006d68926599bac7ff2e"`);
        await queryRunner.query(`ALTER TABLE "tenant_user_apps " DROP CONSTRAINT "FK_581edd2218543bc22a235a33a8f"`);
        await queryRunner.query(`ALTER TABLE "tenant_user_app_roles " DROP CONSTRAINT "FK_1faa1e2f81ddf2bd945a24c8500"`);
        await queryRunner.query(`ALTER TABLE "tenant_user_app_roles " DROP CONSTRAINT "FK_9f902867fc6a1b928acb32ea5f1"`);
        await queryRunner.query(`ALTER TABLE "tenant_user_app_alerts " DROP CONSTRAINT "FK_631e7d3ff82e52b48e317b3bff4"`);
        await queryRunner.query(`ALTER TABLE "tenant_app_features " DROP CONSTRAINT "FK_491fa2dad3876d82ff5d891f7e0"`);
        await queryRunner.query(`ALTER TABLE "tenant_app_features " DROP CONSTRAINT "FK_97c00127b2796c081e3d1b194b2"`);
        await queryRunner.query(`ALTER TABLE "features " DROP CONSTRAINT "FK_c7c4ded69fb64662d2658fbb1bd"`);
        await queryRunner.query(`DROP TABLE "app_messages "`);
        await queryRunner.query(`DROP TABLE "apps "`);
        await queryRunner.query(`DROP TABLE "app_roles "`);
        await queryRunner.query(`DROP TABLE "roles "`);
        await queryRunner.query(`DROP TABLE "feature_permissions "`);
        await queryRunner.query(`DROP TABLE "users "`);
        await queryRunner.query(`DROP TABLE "tenant_users "`);
        await queryRunner.query(`DROP TABLE "tenants "`);
        await queryRunner.query(`DROP TABLE "tenant_apps "`);
        await queryRunner.query(`DROP TABLE "tenant_user_apps "`);
        await queryRunner.query(`DROP TABLE "tenant_user_app_roles "`);
        await queryRunner.query(`DROP TABLE "tenant_user_app_alerts "`);
        await queryRunner.query(`DROP TABLE "tenant_app_features "`);
        await queryRunner.query(`DROP TABLE "clients "`);
        await queryRunner.query(`DROP TABLE "features "`);
    }
}
exports.Init1629871269049 = Init1629871269049;
//# sourceMappingURL=1629871269049-Init.js.map