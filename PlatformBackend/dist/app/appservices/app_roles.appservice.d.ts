import { HttpService } from "@nestjs/common";
import { App_RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/app_rolesDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { App_Role } from "submodules/Ecommerce-Platform-Entities/app_roles.entity";
export default class App_RolesAppService extends AppService<App_Role, App_RolesDto> {
    private readonly app_roleRepository;
    http: HttpService;
    constructor(app_roleRepository: Repository<App_Role>, http: HttpService);
}
