import { UserService } from './../shared/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private userService:UserService) { }
  prevpwd:string;
  newpwd:string;
  confirmvpwd:string;
  error:string='';
  success:string='';
  ngOnInit(): void {
  }
  
  chkandsavechanges(form:NgForm)
  { 
    
    let item=this.userService.loadData();
    console.log("prevpass",this.prevpwd);
    console.log("loadedpass",item.password);
    console.log("newpass",this.newpwd);
    console.log("confrmpass",this.confirmvpwd);
    if(item){
      if(item.password==this.prevpwd&&this.newpwd==this.confirmvpwd){
        
        this.userService.userdata =this.userService.loadData();
        this.userService.userdata.password=this.newpwd;
        
        this.userService.updateUser().subscribe(d=>{
          this.success="Updated sucessfully";
          this.error="";
          localStorage.setItem('user',JSON.stringify(this.userService.userdata));
        })
      }
      else{
        this.success="";
        this.error="wrong credentials";
      }
    }

  }
  


}
