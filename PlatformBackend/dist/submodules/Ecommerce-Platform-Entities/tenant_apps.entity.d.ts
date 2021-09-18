import { EntityBase } from "./EntityBase/entitybase";
import { App } from "./apps.entity";
import { Tenant } from "./tenants.entity";
import { Tenant_App_Feature } from "./tenant_app_features.entity";
import { Tenant_User_App } from "./tenant_user_apps.entity";
export declare class Tenant_App extends EntityBase {
    tenant_id?: number;
    app_id?: number;
    connection_string?: string;
    all_features: boolean;
    apps: App[];
    tenants: Tenant[];
    tenant_app_features: Tenant_App_Feature[];
    tenant_user_apps: Tenant_User_App[];
}
