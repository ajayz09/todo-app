import { Input, Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service'
import Task from 'src/app/models/tasks'
import { TaskService } from 'src/app/services/task.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent {

   tasks: Task[] = [];

   constructor(private auth: AuthenticationService, private router: Router, private taskService: TaskService){}

   ngOnInit() {
      const userId = this.getCurrentUserId()

      this.taskService.getTasks(userId)
         .subscribe((tasks: Task[]) => this.tasks = tasks);   
   }
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
      debugger
      console.log("Login Button");
   }
}