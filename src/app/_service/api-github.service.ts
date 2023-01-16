import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  userGithub: any = {
    "login": "JaquelinePeixer",
    "avatar_url": "https://avatars.githubusercontent.com/u/50639130?v=4",
    "url": "https://api.github.com/users/JaquelinePeixer",
    "html_url": "https://github.com/JaquelinePeixer",
    "name": "Jaqueline Peixer",
    "company": "Girafa Digital",
    "blog": "https://www.linkedin.com/in/jaquelinepeixer/",
    "location": "Blumenau,SC",
    "bio": "Desenvolvedora Front-end | Angular, IONIC, Wordpress."
  }

  constructor(private http: HttpClient) { }

  getUserGithub(): Observable<any> {
    // return this.http.get('https://api.github.com/users/JaquelinePeixer')
    return of(this.userGithub)
  }

}
