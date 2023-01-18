import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { ApiUnsplashService } from '../_service/api-unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: any = []
  termSearch: any

  routeMenu: any

  @Output() itemSearchMenu: EventEmitter<string> = new EventEmitter()
  @ViewChild(MenuComponent) titleSearch: any

  constructor(
    private apiUnsplash: ApiUnsplashService
  ) {  }

  ngOnInit() {
    this.apiUnsplash.getListImages().subscribe(data => {
      this.item = data
      console.log(this.item)
    })
  }

  search(search: any) {
    this.apiUnsplash.getSearchImages(search).subscribe(data => {
      this.item = data.results

      this.item.map((item: any, i: number) => {
        this.item[i] = item.cover_photo
      })
    })
  }

}
