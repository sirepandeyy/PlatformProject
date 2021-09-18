import { EntityBase } from './../Ecommerce-Platform-Entities/EntityBase/entitybase';
import { Address } from "./addresses.entity";
import { State } from "./states.entity";
export declare class City extends EntityBase {
    state_id?: number;
    city_name?: string;
    states: State;
    addresses: Address[];
}
