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

  //Filter tasks for specific user -> done with getter (or in signals a computed value )
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }

  tasks = dummyTasks;
}
