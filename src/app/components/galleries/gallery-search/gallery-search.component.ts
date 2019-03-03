import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {IGallery} from "../../../interface/IGallery";

@Component({
  selector: 'app-gallery-search',
  templateUrl: './gallery-search.component.html',
  styleUrls: ['./gallery-search.component.scss']
})
export class GallerySearchComponent implements OnInit {

  @Output()
  searchValue: EventEmitter<string> = new EventEmitter<string>();
  @Input()
    galleries: IGallery[];

  value: string;

  constructor() { }

  ngOnInit() {
    this.value = '';
  }

  onChange () {
    this.searchValue.emit(this.value);
  }

}
