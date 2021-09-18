import { RolesFacade } from '../facade/roles.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { RolesDto } from '../../submodules/Ecommerce-Platform-Dtos/rolesDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class RolesRoutes {
    private rolesFacade;
    constructor(rolesFacade: RolesFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allRoles(): Promise<ResponseModel<RolesDto>>;
    RoleById(id: number): Promise<ResponseModel<RolesDto>>;
    createRoles(body: RequestModel<RolesDto>): Promise<ResponseModel<RolesDto>>;
    updateRoles(body: RequestModel<RolesDto>): Promise<ResponseModel<RolesDto>>;
    deleteRoles(body: RequestModel<RolesDto>): Promise<ResponseModel<RolesDto>>;
}
