import { Component } from '@angular/core';
import {User} from '../user/user';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: '../auth/auth.component.html',
  styleUrls: ['../auth/auth.component.css']
})
export class AuthComponent implements OnInit {
  title : string;
  title = 'RR Inventory';
  user : User;

  user = {
    username: "";
    password: "";
  };

  constructor(private authService : AuthService) {
  }

  ngOnInit() {
  }

  authenticate(){
    this.title = this.authService.getAuthenticate(this.user).observe();
    console.log(this.title);
  }
}
