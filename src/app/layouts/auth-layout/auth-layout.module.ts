import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/auth-components/login/login.component'; 
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthLayoutComponent } from './auth-layout.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AuthLayoutModule { }