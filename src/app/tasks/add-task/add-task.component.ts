import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../../task.interface';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

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
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }

  onCancel() {
    this.cancel.emit();
  }
}
