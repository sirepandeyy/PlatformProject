import { EntityBase } from "./EntityBase/entitybase";
import { Tenant } from "./tenants.entity";
import { Tenant_User_App } from "./tenant_user_apps.entity";
import { User } from "./users.entity";
export declare class Tenant_User extends EntityBase {
    tenant_id?: number;
    user_id?: number;
    identity_provider_subscriber_id?: string;
    users: User[];
    tenants: Tenant[];
    tenant_user_apps: Tenant_User_App[];
}
