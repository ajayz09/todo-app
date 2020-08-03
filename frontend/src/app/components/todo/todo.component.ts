import { Input, Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service'

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent {

  constructor(private auth: AuthenticationService,private router: Router){}

  

  form: FormGroup = new FormGroup({
    adddetails: new FormControl(''),
  });

    data = [
        {
           item: "All"
        },
        {
           item: "Active"
        },
        {
           item: "Completed"
        }
     ];

     getCurrentUserId(){
      const user = this.auth.getUserDetails()
      return user._id
     }
     
     submit() {
        const userId = this.getCurrentUserId()
      
      
       console.log("Login Button");
      console.log(userId);
     }
}