import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();


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


  onCancel() {
    this.cancel.emit();
  }
}
