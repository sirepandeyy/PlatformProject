import { Tenant_User_App_RolesFacade } from '../facade/tenant_user_app_roles.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { Tenant_User_App_RolesDto } from '../../submodules/Ecommerce-Platform-Dtos/tenant_user_app_rolesDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class Tenant_User_App_RolesRoutes {
    private tenant_user_app_rolesFacade;
    constructor(tenant_user_app_rolesFacade: Tenant_User_App_RolesFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allTenantUserAppRoles(): Promise<ResponseModel<Tenant_User_App_RolesDto>>;
    TenanntUserAppRolesById(id: number): Promise<ResponseModel<Tenant_User_App_RolesDto>>;
    createTenantUserAppRoles(body: RequestModel<Tenant_User_App_RolesDto>): Promise<ResponseModel<Tenant_User_App_RolesDto>>;
    updateTenantUserAppRoles(body: RequestModel<Tenant_User_App_RolesDto>): Promise<ResponseModel<Tenant_User_App_RolesDto>>;
    deleteTenantUserAppRoles(body: RequestModel<Tenant_User_App_RolesDto>): Promise<ResponseModel<Tenant_User_App_RolesDto>>;
}
