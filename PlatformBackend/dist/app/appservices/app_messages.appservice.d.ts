import { HttpService } from "@nestjs/common";
import { App_MessagesDto } from "../../submodules/Ecommerce-Platform-Dtos/app_messagesDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { App_Message } from "submodules/Ecommerce-Platform-Entities/app_messages.entity";
export default class App_MessagesAppService extends AppService<App_Message, App_MessagesDto> {
    private readonly app_messagesRepository;
    http: HttpService;
    constructor(app_messagesRepository: Repository<App_Message>, http: HttpService);
}
