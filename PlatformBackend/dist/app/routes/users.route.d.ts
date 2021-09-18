import { UsersFacade } from '../facade/users.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { UsersDto } from '../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Request } from 'express';
export declare class UsersRoutes {
    private usersFacade;
    constructor(usersFacade: UsersFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allUsers(): Promise<ResponseModel<UsersDto>>;
    UserById(id: number): Promise<ResponseModel<UsersDto>>;
    searchUsers(req: Request): Promise<ResponseModel<UsersDto>>;
    createUsers(body: RequestModel<UsersDto>): Promise<ResponseModel<UsersDto>>;
    updateUsers(body: RequestModel<UsersDto>): Promise<ResponseModel<UsersDto>>;
    deleteUsers(body: RequestModel<UsersDto>): Promise<ResponseModel<UsersDto>>;
}
