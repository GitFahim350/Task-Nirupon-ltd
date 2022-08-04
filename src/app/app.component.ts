import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  // signedInuser:any;

  ngOnInit(): void {
    // let data:any=localStorage.getItem('user');
    // this.signedInuser=JSON.parse(data);
  }
}
