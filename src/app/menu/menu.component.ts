import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiGithubService } from '../_service/api-github.service';
import { ApiUnsplashService } from '../_service/api-unsplash.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  listCategory: any
  userGithub: any

  @Output() titleSearch = new EventEmitter<string>();

  constructor(
    private apiGithub: ApiGithubService,
    private apiUnsplash: ApiUnsplashService

  ) {
    this.getUser()
    this.getCategory()

  }

  getListImage(title: string) {
    this.titleSearch.emit(title)
  }

  async getUser() {
    await this.apiGithub.getUserGithub().subscribe(data => {
      this.userGithub = data
    })
  }

  async getCategory() {
    await this.apiUnsplash.getTopics(8).subscribe(data => {
      this.listCategory = data
    })
  }

}
