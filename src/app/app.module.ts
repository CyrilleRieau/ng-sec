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

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BoucleComponent,
    TodolistComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    CompteurService,
    TodoAjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
