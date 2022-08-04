import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userservice:UserService) { }
  signedInuser:any;
  ngOnInit(): void {
    this.signedInuser=this.userservice.loadData()
  }

}
