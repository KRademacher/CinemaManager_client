import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../classes/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
  	username: new FormControl('', Validators.required),
  	password: new FormControl('', Validators.required)
  });

  message: string;

  constructor(
  	private userService: UserService, 
  	private router: Router
	) { }

  ngOnInit() {
  }

  onSubmit() {
    var user = this.loginForm.value;
    this.login(user);
  }

  login(user: User): void {
  	this.userService.login(user)
  		.subscribe((result) => {
        localStorage.setItem('token', result);
  			//this.jwtService.setToken(result).then(() => {
          this.router.navigate(['/cinemas']);
        //});
  		}, error => {
  			this.message = JSON.stringify(error.error.Message).replace(/["]+/g, ''); //remove double quotes
  		});
  }

  register() {
    this.router.navigate(['/register']);
  }
}