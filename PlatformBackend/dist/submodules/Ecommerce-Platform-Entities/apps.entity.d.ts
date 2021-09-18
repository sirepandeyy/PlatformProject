import { EntityBase } from "./EntityBase/entitybase";
import { App_Message } from "./app_messages.entity";
import { App_Role } from "./app_roles.entity";
import { Feature } from "./features.entity";
import { Tenant_App } from "./tenant_apps.entity";
export declare class App extends EntityBase {
    app_name?: string;
    app_description?: string;
    app_message: App_Message[];
    features: Feature[];
    app_roles: App_Role[];
    tenant_apps: Tenant_App[];
}
