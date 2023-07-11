import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTaskName: string = '';
  editedTask: Task | null = null;

  addTask() {
    if (this.newTaskName.trim().length === 0) {
      return;
    }

    const newTask: Task = {
      name: this.newTaskName,
      completed: false
    };

    this.tasks.push(newTask);
    this.newTaskName = '';
  }

  editTask(task: Task) {
    this.editedTask = task;
  }

  saveTask() {
    this.editedTask = null;
  }

  cancelEdit() {
    this.editedTask = null;
  }

  deleteTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
  }
}
