import { Component, Input, OnInit } from '@angular/core';
import { SearchMovie } from 'src/app/shared/interfaces/interface';
import { MovieService } from 'src/app/shared/services/movie.service';


@Component({
  selector: 'app-popular-page-list',
  templateUrl: './popular-page-list.component.html',
  styleUrls: ['./popular-page-list.component.scss']
})
export class PopularPageListComponent implements OnInit{
	@Input() movie!: SearchMovie;

	constructor(
		private moviService: MovieService
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