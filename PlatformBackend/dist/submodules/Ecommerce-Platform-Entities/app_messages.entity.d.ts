import { EntityBase } from "./EntityBase/entitybase";
import { App } from "./apps.entity";
export declare class App_Message extends EntityBase {
    user_id?: number;
    tenant_id?: number;
    apps: App[];
    app_id?: number;
    is_notification?: boolean;
    subject?: string;
    message_body?: string;
    is_read?: boolean;
}
