import { Component, OnInit } from '@angular/core';
import { BranchService } from '../Services/branch.service';
import { Branch } from '../DataModels/Branch';
import { CustomerService } from '../Services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  userId;
  branches;
  branch;
  customer;
  constructor(private branchService:BranchService,private customerService:CustomerService,private paramsRoute: ActivatedRoute,private accountService:AccountService) {
    this.userId=this.paramsRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.branchService.findAllBranches().subscribe(res => {console.log(res);this.branches = res});
    this.customerService.findById(this.userId).subscribe(res => this.customer=res);
  }

  addAccount(form){
    let data=form.value;
    //this.branchService.findByBranchIFSC(form.value.branch).subscribe(res => this.branches=res);
    this.branch=this.branches.filter(function(res){
        return form.value.branch===res.branchIFSC.toString();
    })
    data['activated']=true;
    data['balance']=0;
    data['customer']=this.customer;
    data['branch']=this.branch[0];
    this.accountService.saveAccount(data);
    console.log(data)
  }


}
