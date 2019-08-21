import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../DataModels/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private CUSTOMER_URL ="http://localhost:8080/api/v1/customer";

  constructor(private httpClient:HttpClient) { }

  findbyEmailAndPassword(email,password):Observable<Customer>{
    return this.httpClient.get<Customer>(this.CUSTOMER_URL+'/'+email+'/'+password);   
  }

  addCustomer(data){
    return this.httpClient.post<Customer>(this.CUSTOMER_URL,data).subscribe(res => console.log(res));   
  }

  findAll(){
    return this.httpClient.get<Customer>(this.CUSTOMER_URL);
  }

  findById(id):Observable<Customer>{
    return this.httpClient.get<Customer>(this.CUSTOMER_URL+"/"+id);
  }

  updateCustomer(data){
    return this.httpClient.put<Customer>(this.CUSTOMER_URL,data);
  }
}
