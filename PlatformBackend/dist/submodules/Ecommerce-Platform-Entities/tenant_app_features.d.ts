import { Feature } from './features';
import { EntityBase } from "./EntityBase/entitybase";
import { Tenant_App } from "./tenant_apps";
export declare class Tenant_App_Feature extends EntityBase {
    tenant_app_id?: number;
    feature_id?: number;
    features: Feature[];
    tenant_apps: Tenant_App[];
}
