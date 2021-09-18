import { FeaturesFacade } from '../facade/features.facade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { FeaturesDto } from '../../submodules/Ecommerce-Platform-Dtos/featuresDto';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class FeaturesRoutes {
    private featuresFacade;
    constructor(featuresFacade: FeaturesFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allFeatures(): Promise<ResponseModel<FeaturesDto>>;
    featureById(id: number): Promise<ResponseModel<FeaturesDto>>;
    createFeatures(body: RequestModel<FeaturesDto>): Promise<ResponseModel<FeaturesDto>>;
    updateFeatures(body: RequestModel<FeaturesDto>): Promise<ResponseModel<FeaturesDto>>;
    deleteFeatures(body: RequestModel<FeaturesDto>): Promise<ResponseModel<FeaturesDto>>;
}
