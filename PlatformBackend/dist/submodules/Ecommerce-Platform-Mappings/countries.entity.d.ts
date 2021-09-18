import { EntityBase } from './../Ecommerce-Platform-Entities/EntityBase/entitybase';
import { State } from "../Ecommerce-Platform-Entities/states.entity";
export declare class Country extends EntityBase {
    country_name?: string;
    country_code?: string;
    country_tel_code?: string;
    currency?: string;
    states: State[];
}
