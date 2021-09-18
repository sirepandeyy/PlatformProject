import { AppsFacade } from '../facade/apps.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { AppsDto } from '../../submodules/Ecommerce-Platform-Dtos/appsDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
import { Request } from 'express';
export declare class AppsRoutes {
    private appsFacade;
    constructor(appsFacade: AppsFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allApps(): Promise<ResponseModel<AppsDto>>;
    searchClients(req: Request): Promise<ResponseModel<AppsDto>>;
    AppById(id: number): Promise<ResponseModel<AppsDto>>;
    createApps(body: RequestModel<AppsDto>): Promise<ResponseModel<AppsDto>>;
    updateApps(body: RequestModel<AppsDto>): Promise<ResponseModel<AppsDto>>;
    deleteApps(body: RequestModel<AppsDto>): Promise<ResponseModel<AppsDto>>;
}
