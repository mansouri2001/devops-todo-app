import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './models/task.model';
import { StatsComponent } from './components/stats/stats.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    StatsComponent,
    TaskFormComponent,
    TaskListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [
    { id: 1, text: 'Containerisation (Docker)', completed: true },
    { id: 2, text: 'Orchestration (Docker Swarm)', completed: false },
    { id: 3, text: 'CI/CD avec GitHub Actions', completed: false }
  ];

  filter: string = 'all';

  addTask(text: string) {
    const newTask: Task = {
      id: Date.now(),
      text: text,
      completed: false
    };
    this.tasks = [...this.tasks, newTask];
  }

  toggleTask(id: number) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  get stats() {
    return {
      total: this.tasks.length,
      active: this.tasks.filter(t => !t.completed).length,
      completed: this.tasks.filter(t => t.completed).length
    };
  }
}