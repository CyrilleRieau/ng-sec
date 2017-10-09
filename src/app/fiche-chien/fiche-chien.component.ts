import { Component, OnInit } from '@angular/core';
import { Chien } from '../shared/chien';
import { ActivatedRoute } from '@angular/router';
import {ChienService} from '../shared/chien.service';

@Component({
  selector: 'app-fiche-chien',
  templateUrl: './fiche-chien.component.html',
  styleUrls: ['./fiche-chien.component.css']
})
export class FicheChienComponent implements OnInit {
 
  chien:Chien = {id:1, nom:'placeholder name', race:'placeholder race', dateNaissance: new Date()};
  constructor(private route:ActivatedRoute, private chienService:ChienService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{ 
      if(parseInt(params.id)!==NaN){
        this.chienService.getChienById(params.id)
        .then((chien)=>this.chien = chien)
        .catch(()=>this.chien=null);
      }else {
        this.chien =null;
      }});

  }

}
