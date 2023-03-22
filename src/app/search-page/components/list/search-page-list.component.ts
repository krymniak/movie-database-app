import { Component, Input, OnInit } from '@angular/core';
import { SearchMovie } from 'src/app/shared/interfaces/interface';


@Component({
	selector: 'app-search-page-list',
	templateUrl: './search-page-list.component.html',
	styleUrls: ['./search-page-list.component.scss']
})
export class SearchPageListComponent implements OnInit {

	@Input() movie!: SearchMovie;

	constructor(
		
	) { }


	ngOnInit(): void {

	}

	getRatingColor(rating: number): string {
    if (rating < 6) {
      return 'warn';
    } else if (rating < 7.9) {
      return 'accent';
    } else {
      return 'primary';
    }
  }

	setDefaultPoster(event: Event) {
		const img = event.target as HTMLImageElement;
		img.src = '/assets/images/no-image-placeholder.svg';
	}
}