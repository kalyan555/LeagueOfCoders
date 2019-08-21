import { Customer } from './Customer';
import { Branch } from './Branch';

export class Account{
    constructor(private _accountNum:number,private _accountType:string,private _balance:number,private _cust_id:Customer,private _activated:boolean,private _branchIFSC:Branch){}
    
}