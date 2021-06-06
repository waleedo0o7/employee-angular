import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth-components/login/login.component';
import { DashboardComponent } from './dashboard-components/dashboard/dashboard.component';
import { LeaveListComponent } from './dashboard-components/leave-list/leave-list.component';
import { LeaveComponent } from './dashboard-components/leave/leave.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  { path: '',   redirectTo: '/auth/login', pathMatch: 'full' },
  {
  path : 'auth',
  component : AuthLayoutComponent,
  children : [
    { path : 'login', component : LoginComponent }
  ]} ,
  { path : 'admin',
  component : DashboardLayoutComponent,
  children : [
    { path : 'dashboard' , component : DashboardComponent},
    { path : 'add-leave' , component : LeaveComponent},
    { path : 'leaves' , component : LeaveListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }