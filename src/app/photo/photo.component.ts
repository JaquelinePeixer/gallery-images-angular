import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUnsplashService } from '../_service/api-unsplash.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  @Input() list: any

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

  getImages() {
    this.apiUnsplash.getListImages().subscribe(data => {
      this.item = data

      console.log('this.item', this.item)
    })
  }


  getPhoto() {
    this.apiUnsplash.getPagePhoto(this.userId).subscribe(data => {
      this.photo = data

      console.log('this.photo', this.photo)
    })
  }




  download_location(url: any) {
    const id = 'rLEIvv0KFdY'
  }


}
