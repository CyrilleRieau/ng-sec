import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todolist.service';
import {CompteurService} from '../shared/compteur.service';
import { TodoAjaxService } from '../shared/todo-ajax.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
/*tableau:string[]=[];
add(obj){
  this.tableau.push(obj);
  return (this.tableau);
}
delete(index:number){
  this.tableau.splice(index, 1);
};*/
liste:Todo[];
newTodo:string;
compteur:number=0;
addtoDo(){
 // this.todoService.add(this.newTodo);
  //console.log(this.liste);

}
removetoDo(index:number){
  //this.todoService.remove(index);
};
addCount(){
  this.compteurService.increment();
  this.compteurService.getCompteur();
}
decrementCount(){
  this.compteurService.decrement();
  this.compteurService.getCompteur();
  }
 addTodo(){
   this.todoService.addTodo({message:this.newTodo}).then((todo)=>this.liste.push(todo));
 } 
 removeTodo(index:number){
   this.todoService.removeTodo({id:index, message:''}).then(() => this.liste = this.liste.filter((todo)=>todo.id !==index))
 };

  constructor(private todoService:TodoAjaxService,
  private compteurService:CompteurService) { }

  ngOnInit() {
    this.todoService.getAllTodo().then((todos) => this.liste = todos);
    this.compteur = this.compteurService.getCompteur();
  }

}
