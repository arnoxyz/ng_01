import { Component, EventEmitter, Output, Input } from '@angular/core';
import { User } from '../user.interface';
import { AddTaskComponent } from "../tasks/add-task/add-task.component";
import { CardComponent } from "../ui/card/card.component";

//define type or use an interface
//type User = { name: string; id: string; avatar: string };

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  //with no signals: using @Input
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  //with signals: using input()
  /*
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();
  imagePath = computed(() => 'assets/users/' + this.user.avatar);
  onSelectUser() {
    //same for code for signals and no signals
    this.select.emit(this.user.id); 
  }
  */
}
