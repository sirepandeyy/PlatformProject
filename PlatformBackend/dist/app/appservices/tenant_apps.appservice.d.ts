import { HttpService } from "@nestjs/common";
import { Tenant_AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_appsDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { Tenant_App } from "submodules/Ecommerce-Platform-Entities/tenant_apps.entity";
export default class Tenant_AppsAppService extends AppService<Tenant_App, Tenant_AppsDto> {
    private readonly tenant_appRepository;
    http: HttpService;
    constructor(tenant_appRepository: Repository<Tenant_App>, http: HttpService);
}
