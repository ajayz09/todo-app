import { Input, Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent {

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

     submit() {
       console.log("Login Button");

     }
}