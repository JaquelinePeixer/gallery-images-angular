import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUnsplashService {

  per_page: number = 30

  private ClientId: string = `client_id=${environment.AccessKeyUnsplash}`

  constructor(private http: HttpClient) { }

  getListImages(): Observable<any> {
    return this.http.get(`https://api.unsplash.com/photos?${this.ClientId}&per_page=${this.per_page}`)
  }

  getSearchImages(search: string): Observable<any> {
    return this.http.get(`https://api.unsplash.com/search/collections?query=${search}&${this.ClientId}&per_page=${this.per_page}`)

    // https://api.unsplash.com/search/collections?query=office
  }

  getTopics(per_page: number): Observable<any> {
    return this.http.get(`https://api.unsplash.com/topics?${this.ClientId}&per_page=${per_page}`)
  }

  getPagePhoto(idPhoto: string): Observable<any> {
    return this.http.get(`https://api.unsplash.com/photos/${idPhoto}?${this.ClientId}`)
  }

  getUserPhotos(username: string): Observable<any> {
    return this.http.get(`https://api.unsplash.com/users/${username}/photos?${this.ClientId}`)
  }


}
