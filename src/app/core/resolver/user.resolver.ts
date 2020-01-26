

 import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class userResolver implements Resolve<Observable<any>> {
  constructor(private userService:UserService){

  }
  resolve(route: ActivatedRouteSnapshot): Observable<any>{
    return this.userService.getUsers();
  }
}
