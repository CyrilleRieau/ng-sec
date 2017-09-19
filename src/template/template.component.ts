import {Component} from '@angular/core';
@Component ({
selector : 'app-template',
templateUrl:'./template.component.html'
})
export class TemplateComponent {
title = 'app';
inputShown:boolean = false;
dogShow:boolean = false;
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

}