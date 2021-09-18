import { Tenant } from './tenants';
import { EntityBase } from "./EntityBase/entitybase";
export declare class Client extends EntityBase {
    address_id?: number;
    start_date?: Date;
    expiry_date?: Date;
    client_key?: string;
    client_name?: string;
    description?: string;
    contact_id?: number;
    tenants: Tenant[];
}
