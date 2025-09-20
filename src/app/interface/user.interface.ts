import { Model } from "mongoose";


 export interface Address {
      city:string,
      zip:number,
      country:string
}


export interface user_info{
     name:string,
     email:string,
     age:number,
     password:string,
     gender: 'Male' | 'Female',
     address:Address,
}


export interface user_password {
       hash_password(password:string):string;
}



export interface user_static extends Model<user_info> {
      hash_password(password:string):string;
}