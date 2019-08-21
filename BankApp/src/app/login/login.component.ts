import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userType="Customer";
  otherUserType="Banker";

  constructor() { }

  ngOnInit() {
  }

  login(formData){
    console.log(formData);
  }
  changeType(){
    if(this.userType=="Customer"){
      this.userType="Banker";
      this.otherUserType="Customer";
    }else{
      this.userType="Customer";
      this.otherUserType="Banker";
    }
  }
}
