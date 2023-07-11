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

  updateTask() {
    this.taskUpdated.emit(this.task);
  }

  editTask() {
    const updatedTaskText = prompt('Enter the updated task text', this.task.text);
    if (updatedTaskText && updatedTaskText.trim()) {
      const updatedTask: Task = {
        text: updatedTaskText,
        completed: this.task.completed,
      };
      this.taskUpdated.emit(updatedTask);
    }
  }
}
