import RolesAppService from "../appservices/roles.appservice";
import { RolesDto } from "../../submodules/Ecommerce-Platform-Dtos/rolesDto";
import FacadeBase from "./facadebase";
import { Role } from "submodules/Ecommerce-Platform-Entities/roles.entity";
export declare class RolesFacade extends FacadeBase<Role, RolesDto> {
    private rolesAppService;
    constructor(rolesAppService: RolesAppService);
}
