import { EntityBase } from "./EntityBase/entitybase";
import { App } from "./apps";
import { Role } from "./roles";
export declare class App_Role extends EntityBase {
    role_id?: number;
    app_id?: number;
    app_role_permissions?: string;
    apps: App[];
    roles: Role[];
}
