import { Tenant_AppsFacade } from '../facade/tenant_apps.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { Tenant_AppsDto } from '../../submodules/Ecommerce-Platform-Dtos/tenant_appsDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class Tenant_AppsRoutes {
    private tenant_appsFacade;
    constructor(tenant_appsFacade: Tenant_AppsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenantApps(): Promise<ResponseModel<Tenant_AppsDto>>;
    TenantAppById(id: number): Promise<ResponseModel<Tenant_AppsDto>>;
    createTenantApps(body: RequestModel<Tenant_AppsDto>): Promise<ResponseModel<Tenant_AppsDto>>;
    updateTenantApps(body: RequestModel<Tenant_AppsDto>): Promise<ResponseModel<Tenant_AppsDto>>;
    deleteTenantApps(body: RequestModel<Tenant_AppsDto>): Promise<ResponseModel<Tenant_AppsDto>>;
}
