import { Tenant_UsersFacade } from '../facade/tenant_users.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { Tenant_UsersDto } from '../../submodules/Ecommerce-Platform-Dtos/tenant_usersDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Request } from 'express';
export declare class Tenant_UsersRoutes {
    private tenant_usersFacade;
    constructor(tenant_usersFacade: Tenant_UsersFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenantUsers(): Promise<ResponseModel<Tenant_UsersDto>>;
    TenantuserById(id: number): Promise<ResponseModel<Tenant_UsersDto>>;
    searchUsers(req: Request): Promise<ResponseModel<Tenant_UsersDto>>;
    createTenantUsers(body: RequestModel<Tenant_UsersDto>): Promise<ResponseModel<Tenant_UsersDto>>;
    updateTenantUsers(body: RequestModel<Tenant_UsersDto>): Promise<ResponseModel<Tenant_UsersDto>>;
    deleteTenantUsers(body: RequestModel<Tenant_UsersDto>): Promise<ResponseModel<Tenant_UsersDto>>;
}
