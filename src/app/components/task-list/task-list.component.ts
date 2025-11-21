import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() filter: string = 'all';
  @Output() taskToggled = new EventEmitter<number>();
  @Output() taskDeleted = new EventEmitter<number>();

  get filteredTasks(): Task[] {
    if (this.filter === 'active') {
      return this.tasks.filter(t => !t.completed);
    }
    if (this.filter === 'completed') {
      return this.tasks.filter(t => t.completed);
    }
    return this.tasks;
  }

  onTaskToggled(id: number) {
    this.taskToggled.emit(id);
  }

  onTaskDeleted(id: number) {
    this.taskDeleted.emit(id);
  }
}