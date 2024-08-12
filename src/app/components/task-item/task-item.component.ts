import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task:Task;
  faTimes = faTimes;

  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();

  onDelete(task) {
    this.onDeleteTask.emit(task);   
  }



  onToggle(task:Task) {
    this.onToggleReminder.emit(task);
  }

}
