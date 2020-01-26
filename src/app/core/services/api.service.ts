import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  formatError(error:any){
    return throwError(error);
  }

  get(url):Observable<any>{
    return this.http.get(url).pipe(catchError(this.formatError));
  }
  post(url,data:any):Observable<any>{
    return this.http.post(url,data).pipe(catchError(this.formatError));
  }
}
