import { TokenResolverService } from './resolver/token-resolver.service';
import { AppMessagesEditComponent } from './secure/app-messages/app-messages-edit/app-messages-edit.component';
import { AppMessagesCreateComponent } from './secure/app-messages/app-messages-create/app-messages-create.component';
import { AppMessagesComponent } from './secure/app-messages/app-messages.component';
import { AppRolesEditComponent } from './secure/app-roles/app-roles-edit/app-roles-edit.component';
import { AppRolesCreateComponent } from './secure/app-roles/app-roles-create/app-roles-create.component';
import { AppRolesComponent } from './secure/app-roles/app-roles.component';

import { FeaturePermissionEditComponent } from './secure/feature-permission/feature-permission-edit/feature-permission-edit.component';
import { FeaturePermissionCreateComponent } from './secure/feature-permission/feature-permission-create/feature-permission-create.component';
import { FeaturePermissionComponent } from './secure/feature-permission/feature-permission.component';
import { FeaturesCreateComponent } from './secure/features/features-create/features-create.component';
import { FeaturesEditComponent } from './secure/features/features-edit/features-edit.component';
import { FeaturesComponent } from './secure/features/features.component';
import { TenantAppFeaturesEditComponent } from './secure/tenant-app-features/tenant-app-features-edit/tenant-app-features-edit.component';
import { TenantAppFeaturesCreateComponent } from './secure/tenant-app-features/tenant-app-features-create/tenant-app-features-create.component';
import { TenantAppFeaturesComponent } from './secure/tenant-app-features/tenant-app-features.component';
import { TenantAppsEditComponent } from './secure/tenant-apps/tenant-apps-edit/tenant-apps-edit.component';
import { TenantAppsCreateComponent } from './secure/tenant-apps/tenant-apps-create/tenant-apps-create.component';
import { TenantAppsComponent } from './secure/tenant-apps/tenant-apps.component';
import { TenantApps } from './interfaces/tenantApps';
import { TenantUserAppAlertsEditComponent } from './secure/tenant-user-app-alerts/tenant-user-app-alerts-edit/tenant-user-app-alerts-edit.component';
import { TenantUserAppAlertsCreateComponent } from './secure/tenant-user-app-alerts/tenant-user-app-alerts-create/tenant-user-app-alerts-create.component';
import { TenantUserAppAlertsComponent } from './secure/tenant-user-app-alerts/tenant-user-app-alerts.component';
import { TenantUserAppRolesEditComponent } from './secure/tenant-user-app-roles/tenant-user-app-roles-edit/tenant-user-app-roles-edit.component';
import { TenantUserAppRolesComponent } from './secure/tenant-user-app-roles/tenant-user-app-roles.component';
import { TenantUserAppsCreateComponent } from './secure/tenant-user-apps/tenant-user-apps-create/tenant-user-apps-create.component';
import { TenantUserAppsEditComponent } from './secure/tenant-user-apps/tenant-user-apps-edit/tenant-user-apps-edit.component';
import { TenantUserAppsComponent } from './secure/tenant-user-apps/tenant-user-apps.component';
import { TenantUserEditComponent } from './secure/tenant-user/tenant-user-edit/tenant-user-edit.component';
import { TenantUserComponent } from './secure/tenant-user/tenant-user.component';
import { TenentEditComponent } from './secure/tenent/tenent-edit/tenent-edit.component';
import { ClientsEditComponent } from './secure/clients/clients-edit/clients-edit.component';
import { ClientsCreateComponent } from './secure/clients/clients-create/clients-create.component';
import { TenentCreateComponent } from './secure/tenent/tenent-create/tenent-create.component';
import { TenentComponent } from './secure/tenent/tenent.component';
import { RoleCreateComponent } from './secure/roles/role-create/role-create.component';
import { RoleEditComponent } from './secure/roles/role-edit/role-edit.component';
import { RolesComponent } from './secure/roles/roles.component';
import { UserEditComponent } from './secure/users/user-edit/user-edit.component';
import { UserCreateComponent } from './secure/users/user-create/user-create.component';
import { UsersComponent } from './secure/users/users.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { ClientsComponent } from './secure/clients/clients.component';
import { TenantUserCreateComponent } from './secure/tenant-user/tenant-user-create/tenant-user-create.component';
import { AppComponent } from './app.component';
import { AppsCreateComponent } from './secure/apps/apps-create/apps-create.component';
import { AppsEditComponent } from './secure/apps/apps-edit/apps-edit.component';


const routes: Routes = [
  {path:'',component:SecureComponent,resolve:{access:TokenResolverService},
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'users',component:UsersComponent},
    {path:'profile',component:ProfileComponent},
    {path:'users/create',component:UserCreateComponent},
    {path:'users/:id/edit',component:UserEditComponent},
    {path:'roles',component:RolesComponent},
    {path:'roles/create',component:RoleCreateComponent},
    {path:'roles/:id/edit',component:RoleEditComponent},
    {path:'tenants',component:TenentComponent},
    {path:'tenants/create',component:TenentCreateComponent},
    {path:'tenants/:id/edit',component:TenentEditComponent},
    {path:'tenantUsers',component:TenantUserComponent},
    {path:'tenantUsers/create',component:TenantUserCreateComponent},
    {path:'tenantUsers/:id/edit',component:TenantUserEditComponent},
    {path:'tenantUserApps',component:TenantUserAppsComponent},
    {path:'tenantUserApps/create',component:TenantUserAppsCreateComponent},
    {path:'tenantUserApps/:id/edit',component:TenantUserAppsEditComponent},
    {path:'tenantUserAppRoles',component:TenantUserAppRolesComponent},
    {path:'tenantUserAppRoles/create',component:TenantUserAppsCreateComponent},
    {path:'tenantUserAppRoles/:id/edit',component:TenantUserAppRolesEditComponent},
    {path:'tenantUserAppAlerts',component:TenantUserAppAlertsComponent},
    {path:'tenantUserAppAlerts/create',component:TenantUserAppAlertsCreateComponent},
    {path:'tenantUserAppAlerts/:id/edit',component:TenantUserAppAlertsEditComponent},
    {path:'clients',component:ClientsComponent},
    {path:'clients/create',component:ClientsCreateComponent},
    {path:'clients/:id/edit',component:ClientsEditComponent},
    {path:'tenantApps',component:TenantAppsComponent},
    {path:'tenantApps/create',component:TenantAppsCreateComponent},
    {path:'tenantApps/:id/edit',component:TenantAppsEditComponent},
    {path:'tenantAppFeatures',component:TenantAppFeaturesComponent},
    {path:'tenantAppFeatures/create',component:TenantAppFeaturesCreateComponent},
    {path:'tenantAppFeatures/:id/edit',component:TenantAppFeaturesEditComponent},
    {path:'features',component:FeaturesComponent},
    {path:'features/create',component:FeaturesCreateComponent},
    {path:'features/:id/edit',component:FeaturesEditComponent},
    {path:'featurePermissions',component:FeaturePermissionComponent},
    {path:'featurePermissions/create',component:FeaturePermissionCreateComponent},
    {path:'featurePermissions/:id/edit',component:FeaturePermissionEditComponent},
    {path:'apps',component:AppComponent},
    {path:'apps/create',component:AppsCreateComponent},
    {path:'apps/:id/edit',component:AppsEditComponent},
    {path:'appRoles',component:AppRolesComponent},
    {path:'appRoles/create',component:AppRolesCreateComponent},
    {path:'appRoles/:id/edit',component:AppRolesEditComponent},
    {path:'appMessages',component:AppMessagesComponent},
    {path:'appMessages/create',component:AppMessagesCreateComponent},
    {path:'appMessages/:id/edit',component:AppMessagesEditComponent},

    
  ]
},

{path:'login',component:LoginComponent}
  //  {
  //    path: '',
  //    component: PublicComponent,
  //    children:[ 
  //      {path:'login',component:LoginComponent},
  //    {path:'register',component:RegisterComponent}]
  //  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
