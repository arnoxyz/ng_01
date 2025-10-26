import { Component, Output, Input, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../../task.interface';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({required: true}) userId !:string;
  @Output() close = new EventEmitter<void>();

  //constructor(private tasksService : TasksService){}
  //or
  private tasksService = inject(TasksService);

  //two way binding withouth signals
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //two way binding with signals
  /*
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  */

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary, 
      date: this.enteredDate
    }, this.userId);

    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
