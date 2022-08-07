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

  Emailexists:boolean=false;
  
  getUserFormData(form:NgForm){
    //console.log("BirthDate",this.userservice.userdata.brithDate);
    this.insertUser(form);
    
  }

  insertUser(myForm:NgForm){
    this.userservice.saveUser().subscribe(d=>{
      console.log("d value is ",d);
      if(d!=null){
        this.userservice.getUser().subscribe(res=>{
          this.userservice.listUser=res;
        });
        this.resetForm(myForm);
        this.router.navigateByUrl('')
        console.log("Save success");
      }
      else{
        
        this.Emailexists=true;
      }
    });

  }

  resetForm(myForm:NgForm){
    myForm.reset();
    this.userservice.userdata=new User();
  }

}
