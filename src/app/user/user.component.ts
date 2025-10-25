import {
  Component,
  input,
  computed,
  Output,
  EventEmitter,
  output,
  Input,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //with no signals: using @Input
  //@Input({ required: true }) id!: string;
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;
  @Input({ required: true }) user!: { name: string; id: string; avatar: string };
  @Output() select = new EventEmitter();

  //with signals: using input()
  //id = input.required<string>();
  //avatar = input.required<string>();
  //name = input.required<string>();
  //select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.user.avatar);

  onSelectUser() {
    this.select.emit(this.user.id); //when using signal!
    //this.select.emit(this.id); //when using @Output
  }
}
