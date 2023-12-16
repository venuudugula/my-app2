import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { NotiifyGuard } from './notiify.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AccountDetailesComponent } from './account-detailes/account-detailes.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { RatingComponent } from './rating/rating.component';
import { RatingChildComponent } from './rating-child/rating-child.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';

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
    {path:'create-user',canDeactivate:[NotiifyGuard],component:CreateUserComponent},
    {path:'createvehicle',canDeactivate:[NotiifyGuard],component:CreatevehicleComponent},
    {path:'create-account',canDeactivate:[NotiifyGuard],component:CreateAccountComponent},
    {path:'user-form',canDeactivate:[NotiifyGuard],component:UserFormComponent},
    {path:'usertask',canDeactivate:[NotiifyGuard],component:UsertaskComponent},
    {path:'user-details/:id',component:UserDetailsComponent},
    {path:'edit-user/:id',component:CreateUserComponent},
    {path:'account-detailes/:id',component:AccountDetailesComponent},
    {path:'edit-account/:id',component:CreateAccountComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'editvehicle-details/:id',component:CreatevehicleComponent},
    {path:'parent',component:ParentComponent},
    {path:'items',component:ItemsComponent},
    {path:'Nav',component:NavComponent},
    {path:'cart',component:CartComponent},
    {path:'rating',component:RatingComponent},
    {path:'rating-child',component:RatingChildComponent},
    {path:'text-area',component:TextAreaComponent},
    {path:'about-company',component:AboutCompanyComponent},
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    }
    

    ]},
    {path:'login',component:LoginComponent},

  {path:'**',component:PageNotfoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
