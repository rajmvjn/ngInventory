import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: '../auth/auth.component.html',
  styleUrls: ['../auth/auth.component.css']
})

export class AuthComponent implements OnInit {
  //title : string;
  title = 'RR Inventory';
  authenticatedData = '';
  
  user : User = {
    username: "",
    password: ""
  };

  constructor (private authService : AuthService) {
  }

  ngOnInit () {
  }

  authenticate () {
    this.authService.getAuthenticate(this.user).subscribe(res => console.log(res.message));
    //console.log(this.authenticatedData);
  }
}
