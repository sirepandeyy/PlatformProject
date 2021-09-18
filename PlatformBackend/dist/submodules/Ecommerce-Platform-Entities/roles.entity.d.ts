import { EntityBase } from "./EntityBase/entitybase";
import { App_Role } from "./app_roles.entity";
import { Feature_Permission } from "./feature_permissions.entity";
import { Tenant_User_App_Role } from "./tenant_user_app_roles.entity";
export declare class Role extends EntityBase {
    role_name?: string;
    role_priviledge?: JSON;
    feature_permissions: Feature_Permission[];
    app_roles: App_Role[];
    tenant_user_app_roles: Tenant_User_App_Role[];
}
