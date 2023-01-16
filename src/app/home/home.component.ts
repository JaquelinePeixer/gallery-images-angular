import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ApiUnsplashService } from '../_service/api-unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  item: any
  termSearch: any

  @Output() itemSearchMenu: EventEmitter<string> = new EventEmitter()
  @ViewChild(MenuComponent) titleSearch: any

  constructor(
    private apiUnsplash: ApiUnsplashService
  ) {
    this.getImages()

  }

  search() {
    // Fazer funcionar a atualização da galeria na função  search()
    this.apiUnsplash.getSearchImages(this.termSearch).subscribe(data => {
      this.item = data
    })
  }

  getImages() {
    this.apiUnsplash.getListImages().subscribe(data => {
      this.item = data
    })
  }

}
