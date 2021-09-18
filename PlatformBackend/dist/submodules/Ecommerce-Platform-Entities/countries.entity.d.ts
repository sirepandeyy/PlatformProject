import { EntityBase } from './EntityBase/entitybase';
import { State } from "./states.entity";
export declare class Country extends EntityBase {
    country_name?: string;
    country_code?: string;
    country_tel_code?: string;
    currency?: string;
    states: State[];
}
