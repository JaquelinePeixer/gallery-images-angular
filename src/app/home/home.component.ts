import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUnsplashService } from '../_service/api-unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // receber um input com o nome da categoria e gerar uma nova lista de search

  item: any
  listItem: any;

  constructor(
    private apiUnsplash: ApiUnsplashService,
    private actRoute: ActivatedRoute

  ) {
    this.getImages()


    this.listItem = this.actRoute.snapshot.paramMap.get("id");


  }

  getImages() {
    this.apiUnsplash.getListImages().subscribe(data => {
      this.item = data

      console.log('this.item', this.item)
    })
  }


}
