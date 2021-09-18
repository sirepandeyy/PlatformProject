import App_RolesAppService from "../appservices/app_roles.appservice";
import { App_RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/app_rolesDto";
import FacadeBase from "./facadebase";
import { App_Role } from "submodules/Ecommerce-Platform-Entities/app_roles.entity";
export declare class App_RolesFacade extends FacadeBase<App_Role, App_RolesDto> {
    private app_rolesAppService;
    constructor(app_rolesAppService: App_RolesAppService);
}
