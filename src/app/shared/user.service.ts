import { UserLogin } from './userlogin.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  Userurl:string="https://localhost:7247/api/Users";
  Userloginurl:string="https://localhost:7247/api/Users/loginuser";
  listUser:User[]=[];
  userdata:User=new User();
  
  userlogindata:UserLogin=new UserLogin();
  constructor(private myhttp:HttpClient) { }

  getUser():Observable<User[]>
  {
    return this.myhttp.get<User[]>(this.Userurl);
  }
  
  saveUser()
  {
    return this.myhttp.post(this.Userurl,this.userdata);
  }

  LoginUser()
  {
    return this.myhttp.post(this.Userloginurl,this.userlogindata);
  }
  isLoggedin():boolean{
    return localStorage.getItem("user")?true:false;
  }
  loadData()
  {
    let data:any=localStorage.getItem('user');
      return JSON.parse(data);
  }
  
  updateUser(){
    return this.myhttp.put(`${this.Userurl}/${this.userdata.id}`,this.userdata);
  }
  isadmin():boolean{
    if(localStorage.getItem("user")!=null){
      let data:any=localStorage.getItem('user');
      return JSON.parse(data).email=="admin@localhost.local"?true:false;
    }
    return false;
  }
  
 
}
