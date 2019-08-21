import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../DataModels/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private ACCOUNT_URL="http://localhost:8080/api/v1/account"
  constructor(private httpClient:HttpClient) { }

  findAccountByCustomerId(id){
    return this.httpClient.get<Account>(this.ACCOUNT_URL+'/customer/'+id);
  }

  saveAccount(data){
    return this.httpClient.post<Account>(this.ACCOUNT_URL,data).subscribe(res => res);
  }

  findByAccountNumber(id){
      return this.httpClient.get<Account>(this.ACCOUNT_URL+'/'+id);
  }
}
