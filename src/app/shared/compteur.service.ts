import { Injectable } from "@angular/core";

@Injectable()

export class CompteurService {
    compteur:number = 0;
      increment(){
      this.compteur++;
      };
      decrement(){
        this.compteur--;
      };
getCompteur(){
    return this.compteur;
}
constructor (){console.log('nouvelle instance de compteurService'); }
  
    ngOnInit() { }
}