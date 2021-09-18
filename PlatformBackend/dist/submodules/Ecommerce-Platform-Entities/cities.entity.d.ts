import { Address } from "./addresses";
import { EntityBase } from "./EntityBase/entitybase";
import { State } from "./states.entity";
export declare class City extends EntityBase {
    state_id?: number;
    city_name?: string;
    states: State;
    addresses: Address[];
}
