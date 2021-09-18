import Tenant_UsersAppService from "../appservices/tenant_users.appservice";
import { Tenant_UsersDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_usersDto";
import FacadeBase from "./facadebase";
import { Tenant_User } from "submodules/Ecommerce-Platform-Entities/tenant_users.entity";
export declare class Tenant_UsersFacade extends FacadeBase<Tenant_User, Tenant_UsersDto> {
    private tenant_usersAppService;
    constructor(tenant_usersAppService: Tenant_UsersAppService);
}
