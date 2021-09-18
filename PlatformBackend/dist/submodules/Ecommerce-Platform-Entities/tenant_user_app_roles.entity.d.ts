import { EntityBase } from "./EntityBase/entitybase";
import { Role } from "./roles.entity";
import { Tenant_User_App } from "./tenant_user_apps.entity";
export declare class Tenant_User_App_Role extends EntityBase {
    tenant_user_app_id?: number;
    role_id?: number;
    roles: Role[];
    tenant_user_apps: Tenant_User_App[];
}
