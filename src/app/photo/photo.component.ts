import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { ApiUnsplashService } from '../_service/api-unsplash.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Output() itemSearchMenu: EventEmitter<string> = new EventEmitter()
  @ViewChild(MenuComponent) titleSearch: any

  item: any
  userId: any
  photo: any

  constructor(
    private apiUnsplash: ApiUnsplashService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id']
      this.getPhoto();
    });

  }

  goHome(search: any) {
    this.router.navigate(["/"], {
      queryParams: {
        s: search
      }
    });
  }

  search(search: any) {
    this.apiUnsplash.getSearchImages(search).subscribe(data => {
      this.item = data.results

      this.item.map((item: any, i: number) => {
        this.item[i] = item.cover_photo
      })

    })
  }

  getImages(username: string) {
    this.apiUnsplash.getUserPhotos(username).subscribe(data => {
      this.item = data
    })
  }

  getPhoto() {
    this.apiUnsplash.getPagePhoto(this.userId).subscribe(data => {
      this.photo = data
      this.getImages(this.photo.user.username)
    })
  }

}
