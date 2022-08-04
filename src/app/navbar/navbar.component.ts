import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userservice:UserService) { }
  signedInuser:any;
  ngOnInit(): void {
    this.signedInuser=this.userservice.loadData()
  }
  logout()
  {
    localStorage.removeItem("user");
  }

}
