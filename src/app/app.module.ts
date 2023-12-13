import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { StracturaldirectivesComponent } from './stracturaldirectives/stracturaldirectives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import{HttpClientModule}from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartproductsComponent } from './flipkartproducts/flipkartproducts.component';
import { MailsComponent } from './mails/mails.component';
import { BoredomComponent } from './boredom/boredom.component';
import { GalaryComponent } from './galary/galary.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsertaskComponent } from './usertask/usertask.component';
import { PricePipe } from './price.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CalculatorComponent,
    PageNotfoundComponent,
    StracturaldirectivesComponent,
    MarksComponent,
    PipesComponent,
    EventComponent,
    CarsComponent,
    ProductsComponent,
    UsersComponent,
    AccountsComponent,
    VehiclesComponent,
    FlipkartproductsComponent,
    MailsComponent,
    BoredomComponent,
    GalaryComponent,
    UserinfoComponent,
    CreateUserComponent,
    CreatevehicleComponent,
    CreateAccountComponent,
    UserFormComponent,
    UsertaskComponent,
    PricePipe,
    UserDetailsComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
