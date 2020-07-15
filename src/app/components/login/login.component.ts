import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  constructor(private router: Router){}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    console.log("Login Button");
    this.router.navigate(['/todo']);
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  onClickRegister() {
    console.log("Register button clicked");
    this.router.navigate(['/register']);
  }

  // onClickLogin() {
  //   console.log("Login button clicked");
  //   this.router.navigate(['/todo']);
  // }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();


}