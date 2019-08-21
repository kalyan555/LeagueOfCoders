import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../DataModels/Customer';
import { CustomerService } from '../Services/customer.service';
import { AccountService } from '../Services/account.service';
import { Account } from '../DataModels/Account';

@Component({
  selector: 'app-edit-customer-details',
  templateUrl: './edit-customer-details.component.html',
  styleUrls: ['./edit-customer-details.component.css']
})
export class EditCustomerDetailsComponent implements OnInit {
  isDisabled=true;
  customer:Customer;
  accounts:any;
  userId;
  infoMessage;
  //accountInfo;
  constructor(private paramsRoute: ActivatedRoute,private customerService:CustomerService,private accountService:AccountService,private route:Router) { 
      this.userId=this.paramsRoute.snapshot.params.id;
  }

  editOrSave(form){
    if(this.isDisabled===false)
      this.updateCustomer(form.value);
    this.isDisabled=!this.isDisabled;
  }

  updateCustomer(data){
    data['cust_id']=this.userId;
    this.customerService.updateCustomer(data).subscribe(res=> console.log("success"));
    this.infoMessage="Details Updated Succesfully"
  }
  ngOnInit() {
    this.customerService.findById(this.userId).subscribe(res=>
      {this.customer=res});

    this.accountService.findAccountByCustomerId(this.userId).subscribe(res => {
      this.accounts=res;
    })
    
  }

  deactivate(data){
    if(data['activated']===true){
      data['activated']=false
  }
  else if(data['activated']===false){
      data['activated']=true
  }
    this.customerService.addCustomer(data);
  }

  addAccount(){
    this.route.navigateByUrl('/admin/edit/editCustomer/'+this.userId+'/addAccount');
  }
  setAccountStatus(data){
    // this.accountService.findByAccountNumber(data.accountNum).subscribe(res=> 
    //   {this.accountInfo=res});
    console.log(data);
    if(data['activated']===true){
        data['activated']=false
    }
    else if(data['activated']===false){
      data['activated']=true
  }
    this.accountService.saveAccount(data);
  }
}
