import { App } from './apps';
import { Tenant_App_Feature } from './tenant_app_features';
import { EntityBase } from "./EntityBase/entitybase";
import { Feature_Permission } from "./feature_permissions";
export declare class Feature extends EntityBase {
    feature_id?: number;
    feature_name?: string;
    app_id?: number;
    base_feature_id?: number;
    feature_description?: string;
    feature_key?: string;
    operations?: string;
    feature_type?: number;
    apps: App[];
    feature_permissions: Feature_Permission[];
    tenant_app_features: Tenant_App_Feature[];
}
