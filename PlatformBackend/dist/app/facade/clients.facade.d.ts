import ClientsAppService from "../appservices/clients.appservice";
import { ClientsDto } from "../../submodules/Ecommerce-Platform-Dtos/clientsDto";
import FacadeBase from "./facadebase";
import { Client } from "submodules/Ecommerce-Platform-Entities/clients.entity";
export declare class ClientsFacade extends FacadeBase<Client, ClientsDto> {
    private clientsAppService;
    constructor(clientsAppService: ClientsAppService);
}
