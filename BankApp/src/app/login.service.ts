import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './DataModels/admin';
import { Customer } from './DataModels/Customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private BANKER_LOGIN_URL ="http://localhost:8080/api/v1/banker";

  private CUSTOMER_LOGIN_URL ="http://localhost:8080/api/v1/customer";


  constructor(private httpClient:HttpClient) { }

  findbyUsernameAndPasswordForAdmin(username,password):Observable<Admin>{
      return this.httpClient.get<Admin>(this.BANKER_LOGIN_URL+'/'+username+'/'+password);  
  }

  findbyUsernameAndPasswordForCustomer(username,password):Observable<Customer>{
        return this.httpClient.get<Customer>(this.CUSTOMER_LOGIN_URL+'/'+username+'/'+password);  
  }
}
