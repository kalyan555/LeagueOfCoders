import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }
  addCustomer(formData){
    let data=formData.value;
    data["activated"]=true;
    this.customerService.addCustomer(data);
    formData.reset();
  }
}
