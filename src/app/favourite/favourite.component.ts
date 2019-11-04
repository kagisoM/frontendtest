import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent implements OnInit {

  @Input('isFavourite') isSelected: boolean;
  @Output('clickedStar') change = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected);
  }
}
