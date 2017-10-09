import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import {BoucleComponent} from './boucle/boucle.component';
import { TodolistComponent } from './todolist/todolist.component';
import {TodoService} from './shared/todolist.service';
import {CompteurService} from './shared/compteur.service';
import {HttpClientModule} from '@angular/common/http';
import { TodoAjaxService } from './shared/todo-ajax.service';
import { ListechienComponent } from './listechien/listechien.component';
import { ChienAjaxService } from './shared/chien-ajax.service';
import { ChienService } from './shared/chien.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FicheChienComponent } from './fiche-chien/fiche-chien.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BoucleComponent,
    TodolistComponent,
    ListechienComponent,
    PagenotfoundComponent,
    FicheChienComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    TodoService,
    CompteurService,
    TodoAjaxService,
    ChienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
