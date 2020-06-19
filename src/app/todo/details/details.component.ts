import { Component, OnInit } from '@angular/core';
import Task from '../task.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  constructor() { }

  public newTask: Task = new Task();
  editTasks: Task[] = [];
  // toDoList: Task[];

  toDoList =[
    {"title": "Test", "description": "For testing", "dueDate": "2020/06/19", "status": "pending"},
    {"title": "Basketball", "description": "play basketball", "dueDate": "2020/06/09", "status": "pending"},
    {"title": "Study", "description": "study Math", "dueDate": "2020/06/30", "status": "Done"},
    {"title": "Workout", "description": "GYM exercise", "dueDate": "2020/06/28", "status": "pending"}
  ];

  ngOnInit() {
  }

  createTask(val: any){
    this.toDoList.push(val);
    this.newTask = new Task();
    localStorage.setItem("a", JSON.stringify(this.toDoList));
    console.log(this.toDoList);
  }

  doneTask(task: any){
    task.status = 'Done';
  }

  editTask(task: any){
    console.log(task);
    if(this.toDoList.includes(task)){
      if(!this.editTasks.includes(task)){
        this.editTasks.push(task);
      }
      else{
          this.editTasks.splice(this.editTasks.indexOf(task), 1);
      }
    }
    console.log(this.editTasks);
  }

  deleteTask(task: any){
    this.toDoList.splice(this.toDoList.indexOf(task), 1);
    console.log(this.toDoList);
  }

}
