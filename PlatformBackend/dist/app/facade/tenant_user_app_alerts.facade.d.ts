import Tenant_User_App_AlertsAppService from "../appservices/tenant_user_app_alerts.appservice";
import { Tenant_User_App_AlertsDto } from "../../submodules/Ecommerce-Platform-Dtos/tenant_user_app_alertsDto";
import FacadeBase from "./facadebase";
import { Tenant_User_App_Alert } from "submodules/Ecommerce-Platform-Entities/tenant_user_app_alerts.entity";
export declare class Tenant_User_App_AlertsFacade extends FacadeBase<Tenant_User_App_Alert, Tenant_User_App_AlertsDto> {
    private tenant_user_app_alertsAppService;
    constructor(tenant_user_app_alertsAppService: Tenant_User_App_AlertsAppService);
}
