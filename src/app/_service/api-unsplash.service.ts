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

  getSearchImages(search: string) {
    return this.http.get(`https://api.unsplash.com/search/collections?${this.ClientId}&query=${search}&per_page=${this.per_page}`)

    // https://api.unsplash.com/search/collections?query=office
  }

  downloadPhoto(idPhoto: string) {
    return this.http.get(`https://api.unsplash.com/photos/${idPhoto}/download?${this.ClientId}`)


    // "https://images.unsplash.com/photo-1673514758999-cf0c81b16dba?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb
    // idPhoto: OEEKURYK3eo
    // retorna { url: xxxx }
  }


  getTopics(per_page: number) {
    return this.http.get(`https://api.unsplash.com/topics?${this.ClientId}&per_page=${per_page}`)
  }

  getPagePhoto(idPhoto: string) {
    return this.http.get(`https://api.unsplash.com/photos/${idPhoto}?${this.ClientId}`)
  }

}
