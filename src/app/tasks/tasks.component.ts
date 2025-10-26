import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { type User } from '../user.interface';
import { type NewTaskData } from '../task.interface';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() user!: User;
  isAddingTask = false;

  // -> use dependency injection (specify dependency in constructor)
  /*
  private tasksService = new TasksService();
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  */

  //or shortcut for dependency injection
  constructor(private tasksService: TasksService) {}

  //Filter tasks for specific user -> done with getter (or in signals a computed value )
  get selectedUserTasks() {
    return this.tasksService.getSelectedUserTasks(this.user.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
