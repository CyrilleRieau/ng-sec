import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Todo } from './todo';
@Injectable()
export class TodoAjaxService {
private urlApi:string = 'http://localhost:3000/todo';

    constructor (private http:HttpClient) {}
    getAllTodo():Promise<Todo[]> {
        return this.http.get<Todo[]>(this.urlApi).toPromise();
    }
    addTodo(todo:Todo):Promise<Todo>{
        return this.http.post<Todo>(this.urlApi, todo).toPromise();
    }
    removeTodo(todo:Todo):Promise<any>{
        return this.http.delete(this.urlApi + '/' + todo.id).toPromise();
    }
}
