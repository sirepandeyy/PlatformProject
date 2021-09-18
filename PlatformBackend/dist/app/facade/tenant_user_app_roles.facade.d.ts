import Tenant_User_App_RolesAppService from "../appservices/tenant_user_app_roles.appservice";
import { Tenant_User_App_RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_user_app_rolesDto";
import FacadeBase from "./facadebase";
import { Tenant_User_App_Role } from "submodules/Ecommerce-Platform-Entities/tenant_user_app_roles.entity";
export declare class Tenant_User_App_RolesFacade extends FacadeBase<Tenant_User_App_Role, Tenant_User_App_RolesDto> {
    private tenant_user_app_rolesAppService;
    constructor(tenant_user_app_rolesAppService: Tenant_User_App_RolesAppService);
}
