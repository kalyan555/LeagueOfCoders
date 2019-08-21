import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  userAccounts;
  constructor(private accountService:AccountService) { }

  ngOnInit() {
    this.accountService.findAccountByCustomerId(localStorage.getItem('userId')).subscribe(res => {
      this.userAccounts=res;
      console.log(res);
    });
    
  }

}
