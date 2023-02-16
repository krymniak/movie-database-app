import { Component, Input, OnInit } from '@angular/core';
import { SearchMovie } from 'src/app/shared/interfaces/interface';
import { MovieService } from 'src/app/shared/services/movie.service';


@Component({
	selector: 'app-search-page-list',
	templateUrl: './search-page-list.component.html',
	styleUrls: ['./search-page-list.component.scss']
})
export class SearchPageListComponent implements OnInit {

	@Input() movie!: SearchMovie;

	constructor(
		private moviService: MovieService
	) { }


	ngOnInit(): void {

	}

	setDefaultPoster(event: Event) {
		const img = event.target as HTMLImageElement;
		img.src = '/assets/images/no-image-placeholder.svg';
	}
}