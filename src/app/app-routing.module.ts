import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { StracturaldirectivesComponent } from './stracturaldirectives/stracturaldirectives.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
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
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'structure1directives',component:StracturaldirectivesComponent},
    {path:'marks',component:MarksComponent},
    {path:'pipes',component:PipesComponent},
    {path:'Event',component:EventComponent},
    {path:'Cars',component:CarsComponent},
    {path:'Products',component:ProductsComponent},
    {path:'Users',component:UsersComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'flipkartproducts',component:FlipkartproductsComponent},
    {path:'mails',component:MailsComponent},
    {path:'boredom',component:BoredomComponent},
    {path:'galary',component:GalaryComponent},
    {path:'useinfo',component:UserinfoComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'createvehicle',component:CreatevehicleComponent},
    {path:'create-account',component:CreateAccountComponent},
    {path:'user-form',component:UserFormComponent},
    {path:'usertask',component:UsertaskComponent}

    ]},
    {path:'login',component:LoginComponent},

  {path:'**',component:PageNotfoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }