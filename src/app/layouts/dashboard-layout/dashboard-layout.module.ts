import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/dashboard-components/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LeaveComponent } from 'src/app/dashboard-components/leave/leave.component';
import { LeaveListComponent } from 'src/app/dashboard-components/leave-list/leave-list.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
 
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';  


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardComponent,
    LeaveComponent,
    LeaveListComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserModule, NgxPaginationModule
  ]
})
export class DashboardLayoutModule { }
