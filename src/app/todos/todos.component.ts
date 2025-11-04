import { Component, OnInit } from '@angular/core';
import { Todo } from "../Todo";
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "Code",
        desc: "I am Description 1",
        active: true
      },
      {
        sno: 2,
        title: "Work",
        desc: "I am Description 2",
        active: true
      },
      {
        sno: 3,
        title: "Relax",
        desc: "I am Description 3",
        active: true
      }
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)

  }

  addTodo(todo:Todo){
    console.log(todo)
    this.todos.push(todo)

  }
}