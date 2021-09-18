import Tenant_User_AppsAppService from "../appservices/tenant_user_apps.appservice";
import { Tenant_User_AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_user_appsDto";
import FacadeBase from "./facadebase";
import { Tenant_User_App } from "submodules/Ecommerce-Platform-Entities/tenant_user_apps.entity";
export declare class Tenant_User_AppsFacade extends FacadeBase<Tenant_User_App, Tenant_User_AppsDto> {
    private tenant_user_appsAppService;
    constructor(tenant_user_appsAppService: Tenant_User_AppsAppService);
}
