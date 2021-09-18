import { TenantsFacade } from '../facade/tenants.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { TenantsDto } from '../../submodules/Ecommerce-Platform-Dtos/tenantsDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Request } from 'express';
export declare class TenantsRoutes {
    private tenantsFacade;
    constructor(tenantsFacade: TenantsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenants(): Promise<ResponseModel<TenantsDto>>;
    TenantById(id: number): Promise<ResponseModel<TenantsDto>>;
    searchTenant(req: Request): Promise<ResponseModel<TenantsDto>>;
    createTenants(body: RequestModel<TenantsDto>): Promise<ResponseModel<TenantsDto>>;
    updateTenants(body: RequestModel<TenantsDto>): Promise<ResponseModel<TenantsDto>>;
    deleteTenants(body: RequestModel<TenantsDto>): Promise<ResponseModel<TenantsDto>>;
}
