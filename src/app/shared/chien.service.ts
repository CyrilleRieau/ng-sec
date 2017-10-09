import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Chien } from "./chien";

@Injectable()

export class ChienService {
    private urlApi:string = 'http://localhost:3000/chien';
    constructor (private http:HttpClient) {}
    
getAllDogs():Promise<Chien[]> {
    return this.http.get<Chien[]>(this.urlApi).toPromise();
};
addDog(dog:Chien):Promise<Chien>{
      return this.http.post<Chien>(this.urlApi, dog).toPromise();
      };
removeDog(id:number):Promise<void>{
    return this.http.delete<void>(this.urlApi+ '/' + id).toPromise();
};
getChienById(id:number):Promise<Chien>{
    return this.http.get<Chien>(this.urlApi+ '/' + id).toPromise();
}
}