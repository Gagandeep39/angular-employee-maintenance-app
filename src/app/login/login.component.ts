import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../models/user.model';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-03-26 01:11:26
 * @modify date 2020-03-26 01:11:26
 * @desc Login Component beckend
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.valid){
      this.isLoading = true;
      this.submitted = false;
      const user = this.loginForm.value;
      this.validateLogin(user);
    }
  }

  validateLogin(user: User) {
    this.authService.logIn(user).subscribe(
      response => {
        this.isLoading = false;
        if(response)
          this.router.navigate(['../admin'], {relativeTo: this.route});
      }, error => {
        this.isLoading = false;
        this.error = error;
      }
    )
  }

  handleError(event) {
    this.error = '';
    this.loginForm.reset();
  }

}

// TODO After loggin in show message successfully logged in for 2 sec
