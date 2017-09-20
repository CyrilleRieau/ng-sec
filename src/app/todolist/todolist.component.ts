import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
tableau:string[]=[];
add(obj){
  this.tableau.push(obj);
  return (this.tableau);
}
delete(obj){
  this.tableau.splice(this.tableau.indexOf(obj), 1);
};
  constructor() { }

  ngOnInit() {
  }

}
