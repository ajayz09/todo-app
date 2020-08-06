import {
  Input,
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";

import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

import { NgModule } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import Task from "src/app/models/tasks";
import { TaskService } from "src/app/services/task.service";

@Component({
  //   encapsulation: ViewEncapsulation.None,
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  public userId;
  tasks: Task[] = [];

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.userId = this.getCurrentUserId();
    this.taskService
      .getTasks(this.userId)
      .subscribe(
        (tasks: Task[]) => (
          (this.tasks = tasks),
          tasks.sort((a, b) =>
            a.completed > b.completed ? 1 : b.completed > a.completed ? -1 : 0
          )
        )
      );
  }

  form: FormGroup = new FormGroup({
    addDetails: new FormControl("", Validators.required)
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

  getCurrentUserId() {
    const user = this.auth.getUserDetails();
    return user._id;
  }

  resetAddDetailsForm() {
    this.form.reset();
    this.form.controls.addDetails.setErrors(null);
  }

  logCheckBoxClick(task) {
    console.log(task);
    this.taskService
      .setCompleted(this.userId, task)
      .subscribe(() => (task.completed = !task.completed));
  }

  submit() {
    if (this.form.invalid) return;

    //  Create new task
    this.taskService
      .createTasks(this.userId, this.form.value.addDetails)
      .subscribe((tasks: Task[]) => this.getTasks());

    this.resetAddDetailsForm();
  }
}
