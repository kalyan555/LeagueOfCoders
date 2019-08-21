import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Customer } from '../DataModels/Customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerName;
  form:FormGroup
  allCustomers;
  searchResults;
  constructor(private customerService:CustomerService,private route:Router) { }

  ngOnInit() {
    this.customerService.findAll().subscribe(res => {this.allCustomers=res;this.searchResults=res});
  }


  editDetails(data){
    this.route.navigateByUrl('/admin/edit/editCustomer/'+data.cust_id);
  }

  onCustomerNameChange(){
    let customer=this.customerName.trim();
    this.searchResults=this.allCustomers.filter(function(res){
      return res.firstname.concat(' ',res.lastname).toLowerCase().includes(customer.toLowerCase());
    });
  }
}
