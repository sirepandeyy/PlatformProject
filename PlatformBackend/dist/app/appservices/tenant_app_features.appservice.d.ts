import { HttpService } from "@nestjs/common";
import { Tenant_App_FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_app_featuresDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { Tenant_App_Feature } from "submodules/Ecommerce-Platform-Entities/tenant_app_features.entity";
export default class Tenant_App_FeaturesAppService extends AppService<Tenant_App_Feature, Tenant_App_FeaturesDto> {
    private readonly tenant_app_featureRepository;
    http: HttpService;
    constructor(tenant_app_featureRepository: Repository<Tenant_App_Feature>, http: HttpService);
}
