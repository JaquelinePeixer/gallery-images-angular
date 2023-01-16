import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { ApiUnsplashService } from '../_service/api-unsplash.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  // @Input() list: any

  @Output() itemSearchMenu: EventEmitter<string> = new EventEmitter()
  @ViewChild(MenuComponent) titleSearch: any

  item: any
  userId: any
  photo: any

  dow: any

  urlDownload: any

  constructor(
    private apiUnsplash: ApiUnsplashService,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe(params => this.userId = params['id'])
    this.getImages()
    this.getPhoto()

  }

  search() {
    // this.apiUnsplash.getSearchImages(this.termSearch).subscribe(data => {
    //   this.item = data
    //   console.log('this.item', this.item)
    // })

  }


  getImages() {
    this.apiUnsplash.getListImages().subscribe(data => {
      this.item = data
    })
  }

  getPhoto() {
    this.apiUnsplash.getPagePhoto(this.userId).subscribe(data => {
      this.photo = data
    })
  }

  download_location(url: any) {
    const id = 'rLEIvv0KFdY'
  }


}
