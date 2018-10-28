import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../registerUser';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public newUser = new RegisterUser("","","");
  submitted = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 
    console.log(this.submitted)
    this.submitted = true; 
  }
}
