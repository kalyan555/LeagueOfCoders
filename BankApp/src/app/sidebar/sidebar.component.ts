import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  bankerOperations=[{
    icon:"fa-user",
    name:"Create Customer",
    link:"add"
  },{
    icon:"fa-cog",
    name:"Edit Customer",
    link:"edit"
  }]

  userOperations=[
    {
      icon:"fa-user",
      name:"Profile",
      link:"profile"
    },{
      icon:"fa-cog",
      name:"View Accounts",
      link:"viewAccounts"
    },{
      icon:"fa-money",
      name:"Make Transaction",
      link:"transaction"
    },{
      icon:"fa-history",
      name:"View Transactions",
      link:"history"
    }]
  operations;

  @Input('data') userType:string;
  constructor(private route:Router) { }

  ngOnInit() {
    if(this.userType==='bank')
      this.operations=this.bankerOperations;
    else if(this.userType==='user')
            this.operations=this.userOperations;
  }

  logout(){
    this.route.navigateByUrl('login');
  }
}
