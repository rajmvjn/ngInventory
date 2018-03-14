import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import { AuthService } from '../api/auth.service';
import {Router} from '@angular/router';

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
  //router = Router;
  constructor (private authService : AuthService, private router: Router) {
  }

  ngOnInit () {
  }

  authenticate () {
    
    //this.router.navigateByUrl('/dashboard');
    this.router.navigate(['dashboard']);
    console.log(this.user);
    /*this.authService.getAuthenticate(this.user)
      .subscribe(res => console.log(res.message),
                                                          (error) => console.log(error),
                                                          () => console.log('auth completed'));*/

  }
}
