import { EntityBase } from "./EntityBase/entitybase";
import { Feature } from "./features.entity";
import { Tenant_App } from "./tenant_apps.entity";
export declare class Tenant_App_Feature extends EntityBase {
    tenant_app_id?: number;
    feature_id?: number;
    features: Feature[];
    tenant_apps: Tenant_App[];
}
