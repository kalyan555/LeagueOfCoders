export class Admin {
    constructor(private _id:number,private _adminName:string, private _password:string){}

    get id():number{
        return this._id;
    }
    get adminName():string{
        return this._adminName;
    }
    get password():string{
        return this._password;
    }
}
