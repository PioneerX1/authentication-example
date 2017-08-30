import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  providers: [AuthenticationService]
})
export class PublicComponent implements OnInit {

  private isLoggedIn: Boolean = null;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if(user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    })
  }

  ngOnInit() {
  }

}
