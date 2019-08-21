import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { EditCustomerDetailsComponent } from './edit-customer-details/edit-customer-details.component';
import { AddAccountComponent } from './add-account/add-account.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:HomeComponent,
    data : {userType : 'bank'},
    children:[
      {path:'',redirectTo:"add",pathMatch:"full"},
      {path:"add",component:AddCustomerComponent},
      {path:"edit",component:EditCustomerComponent},
      {path:"edit/editCustomer/:id",component:EditCustomerDetailsComponent},
      {path:"edit/editCustomer/:id/addAccount",component:AddAccountComponent}
    ]
  },
  {
    path:'customer',
    component:CustomerComponent,
    data : {userType : 'user'},
    children:[
      {path:'',redirectTo:"viewAccounts",pathMatch:"full"},
      {path:"profile",component:ProfileComponent},
      {path:"viewAccounts",component:AccountInfoComponent},
      {path:"transaction",component:TransactionComponent},
      {path:"history",component:TransactionHistoryComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
