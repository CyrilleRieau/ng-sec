import { Component, OnInit } from '@angular/core';
import {CompteurService} from '../shared/compteur.service';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css'],
  //providers:[CompteurService]

})
export class BoucleComponent implements OnInit {
  compteur:number;
  tableau:string[] = ['ga', 'zo', 'bu', 'meu'];

  constructor(private compteurService:CompteurService) { }
  
    ngOnInit() {console.log('compte initial dans boucle ' + this.compteurService.compteur);
      this.compteurService.increment();
      console.log('compte final dans boucle ' +this.compteurService.compteur);
    }
}
