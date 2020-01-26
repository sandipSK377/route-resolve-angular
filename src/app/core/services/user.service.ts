import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="https://jsonplaceholder.typicode.com/todos";

  constructor(private apiService : ApiService) { }
  getUsers(){
    return this.apiService.get(this.url).pipe(delay(2000));
  }
}
