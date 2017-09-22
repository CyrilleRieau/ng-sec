import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Chien } from './chien';

@Injectable()
export class ChienAjaxService {
private urlApi:string = 'http://localhost:3000/chien';

    constructor (private http:HttpClient) {}
    getAllDogs():Promise<Chien[]> {
        return this.http.get<Chien[]>(this.urlApi).toPromise();
    }
    addDog(dog:Chien):Promise<Chien>{
        return this.http.post<Chien>(this.urlApi, dog).toPromise();
    }
    removeDog(dog:Chien):Promise<any>{
        return this.http.delete(this.urlApi + '/' + dog.id).toPromise();
    }
}
