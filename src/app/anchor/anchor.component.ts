import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent implements OnInit {

	@Input() imageUrl;
	@Input() isActive;
	active = " active";

	classes = "c-tabs__list";

	constructor() {
	}

	ngOnInit() {
		if (this.isActive) {
			this.classes+=this.active;
		}
	}

	//Check active state of an anchor link
	ngOnChanges(changes: SimpleChanges) {
		if (!this.isActive) {
			const index = this.classes.indexOf(this.active);
			if (index !== -1) {
				this.classes = this.classes.substr(0, index);
			}
		}
	}
}
