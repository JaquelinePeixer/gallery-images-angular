import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {

  @Input() list: any

  constructor( ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("this.list - gallery", this.list)
    // window.location.reload();
  }

}
