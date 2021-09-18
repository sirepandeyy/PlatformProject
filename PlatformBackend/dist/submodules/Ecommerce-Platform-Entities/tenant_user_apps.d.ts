import { Tenant_User } from './tenant_users';
import { EntityBase } from "./EntityBase/entitybase";
import { Tenant_App } from './tenant_apps';
import { Tenant_User_App_Alert } from './tenant_user_app_alerts';
import { Tenant_User_App_Role } from './tenant_user_app_roles';
export declare class Tenant_User_App extends EntityBase {
    tenant_user_id?: number;
    tenant_app_id?: number;
    tenant_user_app_permissions?: string;
    tenant_apps: Tenant_App[];
    tenant_users: Tenant_User[];
    tenant_user_app_alerts: Tenant_User_App_Alert[];
    tenant_user_app_roles: Tenant_User_App_Role[];
}
