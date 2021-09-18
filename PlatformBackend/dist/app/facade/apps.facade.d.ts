import AppsAppService from "../appservices/apps.appservice";
import { AppsDto } from "../../submodules/Ecommerce-Platform-Dtos/appsDto";
import FacadeBase from "./facadebase";
import { App } from "submodules/Ecommerce-Platform-Entities/apps.entity";
export declare class AppsFacade extends FacadeBase<App, AppsDto> {
    private appsAppService;
    constructor(appsAppService: AppsAppService);
}
