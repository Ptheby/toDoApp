import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  taskList:any[]=[]
  newTodoForm= this.formBuilder.group({
    todoItem:''
  })
constructor(
  private formBuilder: FormBuilder
) {}

addTask() {
  const value= this.newTodoForm.value.todoItem
  this.taskList.push({id: this.taskList.length, name:value})
  this.newTodoForm.reset();
}
completed:boolean= false;

markDone(value:any) {
  value.completed =!value.completed
  value.completed ===true ?
}
}
