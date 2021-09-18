import { ClientsFacade } from '../facade/clients.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { ClientsDto } from '../../submodules/Ecommerce-Platform-Dtos/clientsDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Request } from 'express';
export declare class ClientsRoutes {
    private clientsFacade;
    constructor(clientsFacade: ClientsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allClients(): Promise<ResponseModel<ClientsDto>>;
    ClientById(id: number): Promise<ResponseModel<ClientsDto>>;
    searchClients(req: Request): Promise<ResponseModel<ClientsDto>>;
    createClients(body: RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>>;
    updateClients(body: RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>>;
    deleteClients(body: RequestModel<ClientsDto>): Promise<ResponseModel<ClientsDto>>;
}
