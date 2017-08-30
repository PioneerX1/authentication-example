import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  // providers: [AuthenticationService]
})
export class PublicComponent implements OnInit {

  private user;
  // private isLoggedIn: Boolean = null;

  constructor() { }
  // constructor(public authService: AuthenticationService) {
  //   this.authService.user.subscribe(user => {
  //     if(user == null) {
  //       this.isLoggedIn = false;
  //     } else {
  //       this.isLoggedIn = true;
  //     }
  //   })
  // }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log(this.user);
  }

  ngOnInit() {
  }

}
