import { EntityBase } from "./EntityBase/entitybase";
import { Client } from "./clients.entity";
import { Tenant_App } from "./tenant_apps.entity";
import { Tenant_User } from "./tenant_users.entity";
export declare class Tenant extends EntityBase {
    tenant_name?: string;
    description?: string;
    alias?: string;
    published_from?: Date;
    published_till?: Date;
    is_complete?: boolean;
    site_image_url_path?: string;
    status_id?: number;
    client_id?: number;
    identity_providers_details?: JSON;
    tenant_admin_email?: string;
    tenant_users: Tenant_User[];
    tenant_apps: Tenant_App[];
    clients: Client;
}
