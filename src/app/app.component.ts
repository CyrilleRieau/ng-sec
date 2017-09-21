import { Component } from '@angular/core';
import { CompteurService } from './shared/compteur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPage = 'boucle';
//bool:boolean = true;
  title = 'app';
  methode() {
    this.title = 'Autre';
  }
  /*affiche() {
    if (this.bool==true){
      this.bool=false;
    }
    else if (this.bool==false){
      this.bool=true;
    }
  }*/
  constructor(private compteurService:CompteurService) { }
  
    ngOnInit() {console.log('compte initial dans app' + this.compteurService.compteur);
      this.compteurService.increment();
      console.log('compte initial dans app' + this.compteurService.compteur);
    }
}
