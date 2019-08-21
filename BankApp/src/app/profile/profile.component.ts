import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails;
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.findById(localStorage.getItem('userId')).subscribe(res => {
      console.log(res);
      this.userDetails=res;
    });
    //console.log(this.userDetails);
  }

}
