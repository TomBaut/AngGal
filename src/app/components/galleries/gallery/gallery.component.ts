import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Galleries} from "../../../constants/galleries.constant";
import {IGallery} from "../../../interface/IGallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private galleryId: string;
  private gallery: IGallery;
  private gallery: IGallery;




  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.galleryId = this.route.snapshot.paramMap.get('galleryId');
    this.gallery = Galleries.find((item: IGallery) => item.galleryId === this.galleryId);
    console.log("GALL");
    console.log(this.gallery);
  }

}
