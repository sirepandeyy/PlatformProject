import { Tenant } from '../../submodules/Ecommerce-Platform-Entities/tenants.entity';
import { HttpService } from "@nestjs/common";
import { TenantsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenantsDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class TenantsAppService extends AppService<Tenant, TenantsDto> {
    private readonly tenantRepository;
    http: HttpService;
    constructor(tenantRepository: Repository<Tenant>, http: HttpService);
}
