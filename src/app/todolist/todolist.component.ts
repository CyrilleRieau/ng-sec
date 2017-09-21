import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todolist.service';
import {CompteurService} from '../shared/compteur.service';
import { TodoAjaxService } from '../shared/todo-ajax.service';

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
liste:Object[];
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
  constructor(private todoService:TodoAjaxService,
  private compteurService:CompteurService) { }

  ngOnInit() {
    this.todoService.getAllTodo().then((todos) => this.liste = <Object[]>todos);
    this.compteur = this.compteurService.getCompteur();
  }

}
