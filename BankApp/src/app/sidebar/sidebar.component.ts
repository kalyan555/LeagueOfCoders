import { Component, OnInit, Input } from '@angular/core';

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
  },{
    icon:"fa-power-off",
    name:"Logout",
    link:"logout"
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
    },{
      icon:"fa-power-off",
      name:"Logout",
      link:"logout"
    }]
  operations;

  @Input('data') userType:string;
  constructor() { }

  ngOnInit() {
    console.log(this.userType);
    if(this.userType==='bank')
      this.operations=this.bankerOperations;
    else if(this.userType==='user')
            this.operations=this.userOperations;
  }
}
