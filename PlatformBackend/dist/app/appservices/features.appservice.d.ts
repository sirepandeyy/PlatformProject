import { HttpService } from "@nestjs/common";
import { FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/featuresDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { Feature } from "submodules/Ecommerce-Platform-Entities/features.entity";
export default class FeaturesAppService extends AppService<Feature, FeaturesDto> {
    private readonly featureRepository;
    http: HttpService;
    constructor(featureRepository: Repository<Feature>, http: HttpService);
}
