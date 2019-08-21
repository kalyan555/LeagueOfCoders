import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Branch } from '../DataModels/Branch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private BRANCH_URL='http://localhost:8080/api/v1/branch';

  constructor(private httpClient:HttpClient) { }

  findByBranchIFSC(id){
    return this.httpClient.get<Branch>(this.BRANCH_URL+'/'+id);
  }

  findAllBranches():Observable<Branch>{
    return this.httpClient.get<Branch>(this.BRANCH_URL);
  }
}
