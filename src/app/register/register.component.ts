import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name: string;
email: string;
username: string;
password: string;

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
  }

  register(event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.registerService.register(this.name,this.email,this.username, this.password).subscribe(

      res => {
      console.log("user registered");

      },
      error => {
        console.error(error);
      },

      () => this.navigate()
    );

  }

  navigate() {
    this.router.navigateByUrl('');
  }

}
