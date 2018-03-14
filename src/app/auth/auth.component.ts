import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: '../auth/auth.component.html',
  styleUrls: ['../auth/auth.component.css']
})

export class AuthComponent implements OnInit {
  title  = 'RR Inventory';
  authenticatedData = '';
  user : User = {
    uname: "",
    pwd: ""
  };

  constructor (private authService : AuthService) {
  }

  ngOnInit () {
  }

  authenticate () {
    console.log(this.user);
    this.authService.getAuthenticate(this.user)
      .subscribe(res => console.log(res.message),
                                                          (error) => console.log(error),
                                                          () => console.log('auth completed'));

  }
}
