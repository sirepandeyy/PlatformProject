import { HttpService } from "@nestjs/common";
import { AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/appsDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { App } from "submodules/Ecommerce-Platform-Entities/apps.entity";
export default class AppsAppService extends AppService<App, AppsDto> {
    private readonly appRepository;
    http: HttpService;
    constructor(appRepository: Repository<App>, http: HttpService);
}
