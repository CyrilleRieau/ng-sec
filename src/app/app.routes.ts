import { Routes } from "@angular/router";
import { BoucleComponent } from "./boucle/boucle.component";
import { ListechienComponent } from "./listechien/listechien.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { TemplateComponent } from "./template/template.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { FicheChienComponent } from "./fiche-chien/fiche-chien.component";


export const appRoutes:Routes = [
    {path:'boucle', component: BoucleComponent},
    {path:'template', component: TemplateComponent},
    {path:'todo', component: TodolistComponent},
    {path:'dog', component: ListechienComponent},
    {path:'chien/:id', component: FicheChienComponent},
    {path:'', pathMatch:'full', redirectTo:'/dog'},
    {path:'**', component:PagenotfoundComponent}
]; 