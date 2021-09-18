import { Tenant_App } from './tenant_apps';
import { Feature } from './features';
import { EntityBase } from "./EntityBase/entitybase";
import { App_Role } from './app_roles';
import { App_Message } from './app_messages';
export declare class App extends EntityBase {
    app_name?: string;
    app_description?: string;
    app_message: App_Message[];
    features: Feature[];
    app_roles: App_Role[];
    tenant_apps: Tenant_App[];
}
