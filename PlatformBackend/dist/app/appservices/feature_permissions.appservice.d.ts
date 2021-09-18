import { HttpService } from "@nestjs/common";
import { Feature_PermissionsDto } from "../../submodules/Ecommerce-Platform-Dtos/feature_permissionsDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { Feature_Permission } from "submodules/Ecommerce-Platform-Entities/feature_permissions.entity";
export default class Feature_PermissionsAppService extends AppService<Feature_Permission, Feature_PermissionsDto> {
    private readonly feature_permissionRepository;
    http: HttpService;
    constructor(feature_permissionRepository: Repository<Feature_Permission>, http: HttpService);
}
