import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../classes/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

	registerForm = new FormGroup({
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
    var user = this.registerForm.value;
    this.register(user);
  }

  register(user: User): void {
  	this.userService.register(user)
  		.subscribe((result) => {
        console.log(result);
  			this.message = JSON.stringify(result.Message).replace(/['"]+/g, '');
        this.goBack();
  		}, err => {
        console.error(err);
  			this.message = JSON.stringify(err.error.Message).replace(/['"]+/g, '');
  		});
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}