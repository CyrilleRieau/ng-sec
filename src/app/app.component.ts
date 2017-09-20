import { Component } from '@angular/core';

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
}
