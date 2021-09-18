import { EntityBase } from "./EntityBase/entitybase";
import { Feature_Permission } from "./feature_permissions.entity";
import { Tenant_User } from "./tenant_users.entity";
export declare class User extends EntityBase {
    login_name?: string;
    birth_date?: Date;
    date_of_joining?: Date;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: number;
    marital_status?: string;
    tenant_users: Tenant_User[];
    feature_permissions: Feature_Permission[];
}
