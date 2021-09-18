import { EntityBase } from "./EntityBase/entitybase";
import { Feature } from "./features.entity";
import { Role } from "./roles.entity";
import { User } from "./users.entity";
export declare class Feature_Permission extends EntityBase {
    feature_id?: number;
    operation_permitted?: JSON;
    role_id?: number;
    user_id?: number;
    role_feature_security?: JSON;
    features: Feature[];
    roles: Role[];
    users: User[];
}
