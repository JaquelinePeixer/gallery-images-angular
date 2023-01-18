import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  constructor(private http: HttpClient) { }

  getUserGithub(): Observable<any> {
    return this.http.get('https://api.github.com/users/JaquelinePeixer')
  }

}
