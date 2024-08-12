import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})

export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = 
  new EventEmitter();

  text:string;
  day:string;
  reminder:boolean = false;
  showAddTask:boolean;
  subscription: Subscription;

  constructor(private uiservice:UiService) {
    this.subscription  = this.uiservice.onToggle().subscribe(
      (value) => this.showAddTask = value
    );
  }

  onSubmit() {
    if(!this.text) {
      alert('please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
