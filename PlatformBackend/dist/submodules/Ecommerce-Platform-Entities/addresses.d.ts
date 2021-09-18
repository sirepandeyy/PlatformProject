import { EntityBase } from "./EntityBase/entitybase";
import { City } from "./cities.entity";
import { State } from "./states.entity";
export declare class Address extends EntityBase {
    street_address?: string;
    state_id?: number;
    zip_code?: string;
    address_guid?: string;
    description?: string;
    city_id?: number;
    states: State;
    cities: City;
}
