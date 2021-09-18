import { App_RolesFacade } from '../facade/app_roles.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { App_RolesDto } from '../../submodules/Ecommerce-Platform-Dtos/app_rolesDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class App_RolesRoutes {
    private app_rolesFacade;
    constructor(app_rolesFacade: App_RolesFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allAppRoles(): Promise<ResponseModel<App_RolesDto>>;
    AppRolesById(id: number): Promise<ResponseModel<App_RolesDto>>;
    createAppRoles(body: RequestModel<App_RolesDto>): Promise<ResponseModel<App_RolesDto>>;
    updateAppRoles(body: RequestModel<App_RolesDto>): Promise<ResponseModel<App_RolesDto>>;
    deleteAppRoles(body: RequestModel<App_RolesDto>): Promise<ResponseModel<App_RolesDto>>;
}
