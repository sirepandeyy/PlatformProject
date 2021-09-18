import { EntityBase } from './../Ecommerce-Platform-Entities/EntityBase/entitybase';
import { City } from "./cities.entity";
import { Country } from "./countries.entity";
import { Address } from "./addresses.entity";
export declare class State extends EntityBase {
    state_name?: string;
    state_code?: string;
    state_tel_code?: number;
    country_id?: number;
    countries: Country;
    cities: City[];
    addresses: Address[];
}
