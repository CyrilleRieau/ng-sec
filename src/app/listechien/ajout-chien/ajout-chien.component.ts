import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ListechienComponent} from '../listechien.component';
import { Chien } from '../../shared/chien';


@Component({
  selector: 'app-ajout-chien',
  templateUrl: './ajout-chien.component.html',
  styleUrls: ['./ajout-chien.component.css']
})
export class AjoutChienComponent implements OnInit {
  newDog:Chien;
  @Input()
  numeroChien:number =0;
  @Output("onAdd")
  eventAjout:EventEmitter<Chien> = new EventEmitter();
  
  constructor() { 
    this.newDog = {
      nom : '',
      race:'',
      dateNaissance:null
    };
  }

  ngOnInit() {
    
  }

  addDog(){
    this.eventAjout.emit(this.newDog);
  }
}
