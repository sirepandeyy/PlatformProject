import { PublicComponent } from './../public/public.component';
import { LoginComponent } from './../public/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { UploadComponent } from './component/upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TenentComponent } from './tenent/tenent.component';
import { TenentCreateComponent } from './tenent/tenent-create/tenent-create.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsCreateComponent } from './clients/clients-create/clients-create.component';
import { ClientsEditComponent } from './clients/clients-edit/clients-edit.component';
import { TenentEditComponent } from './tenent/tenent-edit/tenent-edit.component';
import { TenantUserComponent } from './tenant-user/tenant-user.component';
import { TenantUserCreateComponent } from './tenant-user/tenant-user-create/tenant-user-create.component';
import { TenantUserEditComponent } from './tenant-user/tenant-user-edit/tenant-user-edit.component';
import { TenantUserAppsComponent } from './tenant-user-apps/tenant-user-apps.component';
import { TenantUserAppsCreateComponent } from './tenant-user-apps/tenant-user-apps-create/tenant-user-apps-create.component';
import { TenantUserAppsEditComponent } from './tenant-user-apps/tenant-user-apps-edit/tenant-user-apps-edit.component';
import { TenantUserAppRolesComponent } from './tenant-user-app-roles/tenant-user-app-roles.component';
import { TenantUserAppRolesCreateComponent } from './tenant-user-app-roles/tenant-user-app-roles-create/tenant-user-app-roles-create.component';
import { TenantUserAppRolesEditComponent } from './tenant-user-app-roles/tenant-user-app-roles-edit/tenant-user-app-roles-edit.component';
import { TenantUserAppAlertsComponent } from './tenant-user-app-alerts/tenant-user-app-alerts.component';
import { TenantUserAppAlertsCreateComponent } from './tenant-user-app-alerts/tenant-user-app-alerts-create/tenant-user-app-alerts-create.component';
import { TenantUserAppAlertsEditComponent } from './tenant-user-app-alerts/tenant-user-app-alerts-edit/tenant-user-app-alerts-edit.component';
import { TenantAppsComponent } from './tenant-apps/tenant-apps.component';
import { TenantAppsCreateComponent } from './tenant-apps/tenant-apps-create/tenant-apps-create.component';
import { TenantAppsEditComponent } from './tenant-apps/tenant-apps-edit/tenant-apps-edit.component';
import { TenantAppFeaturesComponent } from './tenant-app-features/tenant-app-features.component';
import { TenantAppFeaturesCreateComponent } from './tenant-app-features/tenant-app-features-create/tenant-app-features-create.component';
import { TenantAppFeaturesEditComponent } from './tenant-app-features/tenant-app-features-edit/tenant-app-features-edit.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesCreateComponent } from './features/features-create/features-create.component';
import { FeaturesEditComponent } from './features/features-edit/features-edit.component';
import { FeaturePermissionComponent } from './feature-permission/feature-permission.component';
import { FeaturePermissionCreateComponent } from './feature-permission/feature-permission-create/feature-permission-create.component';
import { FeaturePermissionEditComponent } from './feature-permission/feature-permission-edit/feature-permission-edit.component';
import { AppsComponent } from './apps/apps.component';
import { AppsCreateComponent } from './apps/apps-create/apps-create.component';
import { AppsEditComponent } from './apps/apps-edit/apps-edit.component';
import { AppRolesComponent } from './app-roles/app-roles.component';
import { AppRolesCreateComponent } from './app-roles/app-roles-create/app-roles-create.component';
import { AppRolesEditComponent } from './app-roles/app-roles-edit/app-roles-edit.component';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { AppMessagesCreateComponent } from './app-messages/app-messages-create/app-messages-create.component';
import { AppMessagesEditComponent } from './app-messages/app-messages-edit/app-messages-edit.component';

@NgModule({
  declarations: [NavComponent,MenuComponent, SecureComponent, ProfileComponent, DashboardComponent, UsersComponent, UserCreateComponent, UserEditComponent, RolesComponent, RoleCreateComponent, RoleEditComponent, PaginatorComponent,  UploadComponent, TenentComponent, TenentCreateComponent, ClientsComponent, ClientsCreateComponent, ClientsEditComponent, TenentEditComponent, TenantUserComponent, TenantUserCreateComponent, TenantUserEditComponent, TenantUserAppsComponent, TenantUserAppsCreateComponent, TenantUserAppsEditComponent, TenantUserAppRolesComponent, TenantUserAppRolesCreateComponent, TenantUserAppRolesEditComponent, TenantUserAppAlertsComponent, TenantUserAppAlertsCreateComponent, TenantUserAppAlertsEditComponent, TenantAppsComponent, TenantAppsCreateComponent, TenantAppsEditComponent, TenantAppFeaturesComponent, TenantAppFeaturesCreateComponent, TenantAppFeaturesEditComponent, FeaturesComponent, FeaturesCreateComponent, FeaturesEditComponent, FeaturePermissionComponent, FeaturePermissionCreateComponent, FeaturePermissionEditComponent, AppsComponent, AppsCreateComponent, AppsEditComponent, AppRolesComponent, AppRolesCreateComponent, AppRolesEditComponent, AppMessagesComponent, AppMessagesCreateComponent, AppMessagesEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class SecureModule { }
