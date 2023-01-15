import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiGithubService } from '../_service/api-github.service';
import { ApiUnsplashService } from '../_service/api-unsplash.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  // output par aenviar o nome da categoria

  listCategory: any
  userGithub: any

  constructor(
    private apiGithub: ApiGithubService,
    private apiUnsplash: ApiUnsplashService,
    private router: Router

  ) {
    this.getUser()
    this.getCategory()

  }

  public itemCategory: any

  getListImage(title: string) {

    this.router.navigate(['/home'], { queryParams: { itemCategory: title } });

    debugger


    // this.apiGithub.getUserGithub().subscribe(data => {
    //   this.userGithub = data
    // })
  }

  getUser() {
    this.apiGithub.getUserGithub().subscribe(data => {
      this.userGithub = data
    })
  }

  getCategory() {
    this.apiUnsplash.getTopics(8).subscribe(data => {
      this.listCategory = data
    })
  }

}
