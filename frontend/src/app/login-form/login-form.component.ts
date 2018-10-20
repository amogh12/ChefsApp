import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  testUser = new User(1, "dtran3@ualberta.ca", "123456");
  constructor() { }

  ngOnInit() {
  }

  get diagnostics() {
    return JSON.stringify(this.testUser)
  }
}
