import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { SearchviewproductComponent } from './searchviewproduct/searchviewproduct.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ViewproductComponent,
    SearchproductComponent,
    SearchviewproductComponent,
    UserloginComponent,
    UserregistrationComponent,
    AdminloginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
