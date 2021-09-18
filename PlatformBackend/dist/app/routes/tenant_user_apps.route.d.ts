import { Tenant_User_AppsFacade } from '../facade/tenant_user_apps.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { Tenant_User_AppsDto } from '../../submodules/Ecommerce-Platform-Dtos/tenant_user_appsDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Request } from 'express';
export declare class Tenant_User_AppsRoutes {
    private tenant_user_appsFacade;
    constructor(tenant_user_appsFacade: Tenant_User_AppsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenantUserApps(): Promise<ResponseModel<Tenant_User_AppsDto>>;
    searchUsers(req: Request): Promise<ResponseModel<Tenant_User_AppsDto>>;
    TenantUserAppById(id: number): Promise<ResponseModel<Tenant_User_AppsDto>>;
    createTenantUserApps(body: RequestModel<Tenant_User_AppsDto>): Promise<ResponseModel<Tenant_User_AppsDto>>;
    updateTenantUserApps(body: RequestModel<Tenant_User_AppsDto>): Promise<ResponseModel<Tenant_User_AppsDto>>;
    deleteTenantUserApps(body: RequestModel<Tenant_User_AppsDto>): Promise<ResponseModel<Tenant_User_AppsDto>>;
}
