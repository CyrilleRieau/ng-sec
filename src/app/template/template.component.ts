import {Component} from '@angular/core';
import {CompteurService} from '../shared/compteur.service';

@Component ({
selector : 'app-template',
templateUrl:'./template.component.html',
providers:[CompteurService]
})
export class TemplateComponent {
title = 'app';
inputShown:boolean = false;
dogShow:boolean = false;
compteur:number;
personne = {

}
afficher() {
    console.log(this.personne);
}
methode() {
  this.title = 'Autre';
}
toggleInput(){
    this.inputShown = !this.inputShown;
}
constructor(
    private compteurService:CompteurService) { }
  
    ngOnInit() {
      this.compteur = this.compteurService.getCompteur();
    console.log('compte initial dans template ' + this.compteurService.compteur);
        this.compteurService.increment();
        console.log('compte final dans template ' +this.compteurService.compteur);
      }

}