import App_MessagesAppService from "../appservices/app_messages.appservice";
import { App_MessagesDto } from "../../submodules/Ecommerce-Platform-Dtos/app_messagesDto";
import FacadeBase from "./facadebase";
import { App_Message } from "submodules/Ecommerce-Platform-Entities/app_messages.entity";
export declare class App_MessagesFacade extends FacadeBase<App_Message, App_MessagesDto> {
    private app_messagesAppService;
    constructor(app_messagesAppService: App_MessagesAppService);
}
