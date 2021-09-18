import { HttpService } from "@nestjs/common";
import { ClientsDto } from "../../submodules/Ecommerce-Platform-Dtos/clientsDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { Client } from "submodules/Ecommerce-Platform-Entities/clients.entity";
export default class ClientsAppService extends AppService<Client, ClientsDto> {
    private readonly clientRepository;
    http: HttpService;
    constructor(clientRepository: Repository<Client>, http: HttpService);
}
