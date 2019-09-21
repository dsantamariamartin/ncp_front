import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-dashboard',
  templateUrl: './form-dashboard.component.html',
  styleUrls: ['./form-dashboard.component.css']
})
export class FormDashboardComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  options: FormGroup;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor(fb: FormBuilder) { 
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

  

}
