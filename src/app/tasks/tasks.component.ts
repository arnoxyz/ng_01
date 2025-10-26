import { Component, Input, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { User } from '../user.interface';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() user!: User;

  //TODO: Filter tasks for specific user
  tasks = dummyTasks;
}
