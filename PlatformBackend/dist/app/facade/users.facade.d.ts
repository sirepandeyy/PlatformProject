import UsersAppService from "../appservices/users.appservice";
import { UsersDto } from "../../submodules/Ecommerce-Platform-Dtos/usersDto";
import FacadeBase from "./facadebase";
import { User } from "submodules/Ecommerce-Platform-Entities/users.entity";
export declare class UsersFacade extends FacadeBase<User, UsersDto> {
    private usersAppService;
    constructor(usersAppService: UsersAppService);
}
