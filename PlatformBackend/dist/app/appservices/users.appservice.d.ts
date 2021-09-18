import { User } from '../../submodules/Ecommerce-Platform-Entities/users.entity';
import { HttpService } from "@nestjs/common";
import { UsersDto } from "../../submodules/Ecommerce-Platform-Dtos/usersDto";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class UsersAppService extends AppService<User, UsersDto> {
    private readonly userRepository;
    http: HttpService;
    constructor(userRepository: Repository<User>, http: HttpService);
}
