import FeaturesAppService from "../appservices/features.appservice";
import { FeaturesDto } from "../../submodules/Ecommerce-Platform-Dtos/featuresDto";
import FacadeBase from "./facadebase";
import { Feature } from "submodules/Ecommerce-Platform-Entities/features.entity";
export declare class FeaturesFacade extends FacadeBase<Feature, FeaturesDto> {
    private featuresAppService;
    constructor(featuresAppService: FeaturesAppService);
}
