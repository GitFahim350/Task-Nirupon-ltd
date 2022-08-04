import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users:any;
  constructor(public userservice:UserService) { 
    
  }
  searchText:any;
  ngOnInit() {
    this.userservice.getUser().subscribe(data=>{
      //console.log("Hello",data);
      this.userservice.listUser=data;
      //this.users=data;
    });
    
  }

}
