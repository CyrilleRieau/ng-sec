import { Component, OnInit } from '@angular/core';
import { Chien } from '../shared/chien';
import {ChienService} from '../shared/chien.service';
import {ChienAjaxService} from '../shared/chien-ajax.service';

@Component({
  selector: 'app-listechien',
  templateUrl: './listechien.component.html',
  styleUrls: ['./listechien.component.css']
})

export class ListechienComponent implements OnInit {
listeChien:Chien[] = [];
aModifier:Chien;
/*newDog:Chien={
  nom:'',
  race:'',
  dateNaissance:null
};*/
addDog(dog:Chien){
     this.chienService.addDog(dog).then((dog)=>this.listeChien.push(dog));
   };

   removeDog(id:number){
     this.chienService.removeDog(id).then(() => this.ngOnInit())
     //A la place de ngOnint, on peut écrire cela this.listeChien = this.listeChien.filter((dog)=>dog.id !==id))
   };
  modifier(chien:Chien){
    this.chienService.update(chien.id, chien);
  }
    constructor(private chienService:ChienService) { }
  
    ngOnInit() {
      this.chienService.getAllDogs().then((dogs) => this.listeChien = dogs);
    }
  
  }
  
