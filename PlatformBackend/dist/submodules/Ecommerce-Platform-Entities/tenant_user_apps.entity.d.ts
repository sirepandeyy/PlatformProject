import { EntityBase } from "./EntityBase/entitybase";
import { Tenant_App } from "./tenant_apps.entity";
import { Tenant_User } from "./tenant_users.entity";
import { Tenant_User_App_Alert } from "./tenant_user_app_alerts.entity";
import { Tenant_User_App_Role } from "./tenant_user_app_roles.entity";
export declare class Tenant_User_App extends EntityBase {
    tenant_user_id?: number;
    tenant_app_id?: number;
    tenant_user_app_permissions?: string;
    tenant_apps: Tenant_App[];
    tenant_users: Tenant_User[];
    tenant_user_app_alert: Tenant_User_App_Alert[];
    tenant_user_app_roles: Tenant_User_App_Role[];
}
