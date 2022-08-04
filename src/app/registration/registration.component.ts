import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  
  getUserFormData(form:NgForm){
    this.insertUser(form);
    this.router.navigateByUrl('\login')
  }

  insertUser(myForm:NgForm){
    this.userservice.saveUser().subscribe(d=>{
      this.userservice.getUser().subscribe(res=>{
        this.userservice.listUser=res;
      });
      console.log("Save success");
    });
  }

  resetForm(myForm:NgForm){
    myForm.form.reset();
    this.userservice.userdata=new User();
  }

}
