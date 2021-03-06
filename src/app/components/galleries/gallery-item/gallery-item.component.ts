import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IGallery} from "../../../interface/IGallery";




@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() gallery: IGallery;
  @Output() deleteGallery: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    console.log(this.gallery);
  }
  onDelete(galleryId: string) {
      this.deleteGallery.emit(galleryId);
  }

}
