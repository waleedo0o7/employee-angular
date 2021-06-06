import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { DashboardLayoutModule } from './layouts/dashboard-layout/dashboard-layout.module';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

 
import { CommonModule } from '@angular/common'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthLayoutModule,
    DashboardLayoutModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,


    CommonModule,
    RouterModule,
    FlexLayoutModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
