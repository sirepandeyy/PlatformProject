import Tenant_AppsAppService from "../appservices/tenant_apps.appservice";
import { Tenant_AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_appsDto";
import FacadeBase from "./facadebase";
import { Tenant_App } from "submodules/Ecommerce-Platform-Entities/tenant_apps.entity";
export declare class Tenant_AppsFacade extends FacadeBase<Tenant_App, Tenant_AppsDto> {
    private tenant_appsAppService;
    constructor(tenant_appsAppService: Tenant_AppsAppService);
}
