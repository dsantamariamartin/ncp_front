import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: string;
password: string;
hide = true;
options: FormGroup;
showNav=true;

  constructor(private loginService: LoginService,
     private router: Router, private userService: UserService,
      fb: FormBuilder, private alertService: AlertService) { 
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }
  logIn(event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(this.username, this.password).subscribe(

      res => {
        let u: User = {name: res.name, image : res.image };
        this.userService.setUserLoggedIn(u);
        this.loginService.loginSuccesfull();

      },
      error => {
        this.alertService.error('Username or password is incorrect');
        console.error(error);
      },

      () => this.navigate()
    );

  }

  navigate() {
    this.router.navigateByUrl('/dashboard');
  }

}
