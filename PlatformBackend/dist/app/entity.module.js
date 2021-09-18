"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_appservice_1 = require("./appservices/users.appservice");
const users_facade_1 = require("./facade/users.facade");
const users_route_1 = require("./routes/users.route");
const tenants_appservice_1 = require("./appservices/tenants.appservice");
const tenant_users_appservice_1 = require("./appservices/tenant_users.appservice");
const tenant_apps_appservice_1 = require("./appservices/tenant_apps.appservice");
const tenant_app_features_appservice_1 = require("./appservices/tenant_app_features.appservice");
const tenant_user_apps_appservice_1 = require("./appservices/tenant_user_apps.appservice");
const tenant_user_app_roles_appservice_1 = require("./appservices/tenant_user_app_roles.appservice");
const tenant_user_app_alerts_appservice_1 = require("./appservices/tenant_user_app_alerts.appservice");
const roles_appservice_1 = require("./appservices/roles.appservice");
const feature_permissions_appservice_1 = require("./appservices/feature_permissions.appservice");
const features_appservice_1 = require("./appservices/features.appservice");
const clients_appservice_1 = require("./appservices/clients.appservice");
const apps_appservice_1 = require("./appservices/apps.appservice");
const app_roles_appservice_1 = require("./appservices/app_roles.appservice");
const app_messages_appservice_1 = require("./appservices/app_messages.appservice");
const tenant_users_facade_1 = require("./facade/tenant_users.facade");
const tenant_apps_facade_1 = require("./facade/tenant_apps.facade");
const tenant_app_features_facade_1 = require("./facade/tenant_app_features.facade");
const tenant_user_apps_facade_1 = require("./facade/tenant_user_apps.facade");
const tenant_user_app_roles_facade_1 = require("./facade/tenant_user_app_roles.facade");
const tenant_user_app_alerts_facade_1 = require("./facade/tenant_user_app_alerts.facade");
const roles_facade_1 = require("./facade/roles.facade");
const feature_permissions_facade_1 = require("./facade/feature_permissions.facade");
const features_facade_1 = require("./facade/features.facade");
const clients_facade_1 = require("./facade/clients.facade");
const apps_facade_1 = require("./facade/apps.facade");
const app_roles_facade_1 = require("./facade/app_roles.facade");
const app_messages_facade_1 = require("./facade/app_messages.facade");
const tenants_facade_1 = require("./facade/tenants.facade");
const tenants_route_1 = require("./routes/tenants.route");
const tenant_users_route_1 = require("./routes/tenant_users.route");
const tenant_apps_route_1 = require("./routes/tenant_apps.route");
const tenant_app_features_route_1 = require("./routes/tenant_app_features.route");
const tenant_user_apps_route_1 = require("./routes/tenant_user_apps.route");
const tenant_user_app_roles_route_1 = require("./routes/tenant_user_app_roles.route");
const tenant_user_app_alerts_route_1 = require("./routes/tenant_user_app_alerts.route");
const roles_route_1 = require("./routes/roles.route");
const feature_permissions_route_1 = require("./routes/feature_permissions.route");
const features_route_1 = require("./routes/features.route");
const clients_route_1 = require("./routes/clients.route");
const apps_route_1 = require("./routes/apps.route");
const app_roles_route_1 = require("./routes/app_roles.route");
const app_messages_route_1 = require("./routes/app_messages.route");
const addresses_1 = require("../submodules/Ecommerce-Platform-Entities/addresses");
const apps_entity_1 = require("../submodules/Ecommerce-Platform-Entities/apps.entity");
const app_messages_entity_1 = require("../submodules/Ecommerce-Platform-Entities/app_messages.entity");
const app_roles_entity_1 = require("../submodules/Ecommerce-Platform-Entities/app_roles.entity");
const cities_entity_1 = require("../submodules/Ecommerce-Platform-Entities/cities.entity");
const clients_entity_1 = require("../submodules/Ecommerce-Platform-Entities/clients.entity");
const countries_entity_1 = require("../submodules/Ecommerce-Platform-Entities/countries.entity");
const features_entity_1 = require("../submodules/Ecommerce-Platform-Entities/features.entity");
const feature_permissions_entity_1 = require("../submodules/Ecommerce-Platform-Entities/feature_permissions.entity");
const roles_entity_1 = require("../submodules/Ecommerce-Platform-Entities/roles.entity");
const states_entity_1 = require("../submodules/Ecommerce-Platform-Entities/states.entity");
const tenants_entity_1 = require("../submodules/Ecommerce-Platform-Entities/tenants.entity");
const tenant_apps_entity_1 = require("../submodules/Ecommerce-Platform-Entities/tenant_apps.entity");
const tenant_app_features_entity_1 = require("../submodules/Ecommerce-Platform-Entities/tenant_app_features.entity");
const tenant_users_entity_1 = require("../submodules/Ecommerce-Platform-Entities/tenant_users.entity");
const tenant_user_apps_entity_1 = require("../submodules/Ecommerce-Platform-Entities/tenant_user_apps.entity");
const tenant_user_app_alerts_entity_1 = require("../submodules/Ecommerce-Platform-Entities/tenant_user_app_alerts.entity");
const tenant_user_app_roles_entity_1 = require("../submodules/Ecommerce-Platform-Entities/tenant_user_app_roles.entity");
const users_entity_1 = require("../submodules/Ecommerce-Platform-Entities/users.entity");
let EntityModule = class EntityModule {
    constructor() {
        console.log("Inside Entity Module....");
    }
    configure(consumer) {
        console.log("Inside Consumer");
    }
};
EntityModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.User,
                tenants_entity_1.Tenant,
                tenant_users_entity_1.Tenant_User,
                tenant_user_apps_entity_1.Tenant_User_App,
                tenant_user_app_roles_entity_1.Tenant_User_App_Role,
                tenant_user_app_alerts_entity_1.Tenant_User_App_Alert,
                tenant_apps_entity_1.Tenant_App,
                tenant_app_features_entity_1.Tenant_App_Feature,
                roles_entity_1.Role,
                features_entity_1.Feature,
                feature_permissions_entity_1.Feature_Permission,
                clients_entity_1.Client,
                apps_entity_1.App,
                app_roles_entity_1.App_Role,
                app_messages_entity_1.App_Message,
                addresses_1.Address,
                cities_entity_1.City,
                countries_entity_1.Country,
                states_entity_1.State
            ]),
        ],
        providers: [users_facade_1.UsersFacade,
            users_appservice_1.default,
            tenants_facade_1.TenantsFacade,
            tenants_appservice_1.default,
            tenant_users_facade_1.Tenant_UsersFacade,
            tenant_users_appservice_1.default,
            tenant_user_apps_facade_1.Tenant_User_AppsFacade,
            tenant_user_apps_appservice_1.default,
            tenant_user_app_roles_facade_1.Tenant_User_App_RolesFacade,
            tenant_user_app_roles_appservice_1.default,
            tenant_user_app_alerts_facade_1.Tenant_User_App_AlertsFacade,
            tenant_user_app_alerts_appservice_1.default,
            tenant_apps_facade_1.Tenant_AppsFacade,
            tenant_apps_appservice_1.default,
            tenant_app_features_facade_1.Tenant_App_FeaturesFacade,
            tenant_app_features_appservice_1.default,
            roles_facade_1.RolesFacade,
            roles_appservice_1.default,
            features_facade_1.FeaturesFacade,
            features_appservice_1.default,
            feature_permissions_facade_1.Feature_PermissionsFacade,
            feature_permissions_appservice_1.default,
            clients_facade_1.ClientsFacade,
            clients_appservice_1.default,
            apps_facade_1.AppsFacade,
            apps_appservice_1.default,
            app_roles_facade_1.App_RolesFacade,
            app_roles_appservice_1.default,
            app_messages_facade_1.App_MessagesFacade,
            app_messages_appservice_1.default
        ],
        controllers: [users_route_1.UsersRoutes,
            tenants_route_1.TenantsRoutes,
            tenant_users_route_1.Tenant_UsersRoutes,
            tenant_user_apps_route_1.Tenant_User_AppsRoutes,
            tenant_user_app_roles_route_1.Tenant_User_App_RolesRoutes,
            tenant_user_app_alerts_route_1.Tenant_User_App_AlertsRoutes,
            tenant_apps_route_1.Tenant_AppsRoutes,
            tenant_app_features_route_1.Tenant_App_FeaturesRoutes,
            roles_route_1.RolesRoutes,
            features_route_1.FeaturesRoutes,
            feature_permissions_route_1.Feature_PermissionsRoutes,
            clients_route_1.ClientsRoutes,
            apps_route_1.AppsRoutes,
            app_roles_route_1.App_RolesRoutes,
            app_messages_route_1.App_MessagesRoutes
        ]
    }),
    __metadata("design:paramtypes", [])
], EntityModule);
exports.EntityModule = EntityModule;
//# sourceMappingURL=entity.module.js.map