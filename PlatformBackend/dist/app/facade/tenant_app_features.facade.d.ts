import Tenant_App_FeaturesAppService from "../appservices/tenant_app_features.appservice";
import { Tenant_App_FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_app_featuresDto";
import FacadeBase from "./facadebase";
import { Tenant_App_Feature } from "submodules/Ecommerce-Platform-Entities/tenant_app_features.entity";
export declare class Tenant_App_FeaturesFacade extends FacadeBase<Tenant_App_Feature, Tenant_App_FeaturesDto> {
    private tenant_app_featuresAppService;
    constructor(tenant_app_featuresAppService: Tenant_App_FeaturesAppService);
}
