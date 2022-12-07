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
import { RouterModule } from '@angular/router';

const myRoute=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  },
  {
    path:"userregistration",
    component:UserregistrationComponent
  },
  {
    path:"addproduct",
    component:AddproductComponent
  },
  {
    path:"searchproduct",
    component:SearchproductComponent
  },
  {
    path:"viewproduct",
    component:ViewproductComponent
  }
]

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
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
