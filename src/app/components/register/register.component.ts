import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {


  constructor(private router: Router) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    fullname: new FormControl(''),
    emailid: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),

  });

  submit() {
    console.log("Login Button");
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  onClickHaveAccount() {
    console.log("Back to login clicked");
    this.router.navigate(['/login']);
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}