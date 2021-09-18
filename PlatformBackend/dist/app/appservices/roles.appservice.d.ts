import { HttpService } from "@nestjs/common";
import { RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/rolesDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { Role } from "submodules/Ecommerce-Platform-Entities/roles.entity";
export default class RolesAppService extends AppService<Role, RolesDto> {
    private readonly roleRepository;
    http: HttpService;
    constructor(roleRepository: Repository<Role>, http: HttpService);
}
