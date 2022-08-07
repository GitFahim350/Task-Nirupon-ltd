import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserLogin } from '../shared/userlogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinuser:any;
  error:boolean=false;
  constructor(public userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  getUserloginData(form:NgForm){
    
    this.insertloginData(form);
  }
  insertloginData(form:NgForm)
  {
    this.userservice.LoginUser().subscribe(d=>{
     
      if(d!=null){
        localStorage.setItem('user',JSON.stringify(d))
        this.router.navigateByUrl('\profile')
      }
      else{
        this.error=true;
      }
    });
  }
  resetForm(myForm:NgForm){
    myForm.reset();
    this.userservice.userlogindata=new UserLogin();
  }

}
