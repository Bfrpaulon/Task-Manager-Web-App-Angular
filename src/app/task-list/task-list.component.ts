import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input()
  task!: Task;
  @Output() taskUpdated = new EventEmitter<Task>();

  // Rest of the component code...
}
