import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/interface';


@Component({
  selector: 'app-movie-page-movie',
  templateUrl: './movie-page-movie.component.html',
  styleUrls: ['./movie-page-movie.component.scss']
})
export class MoviePageMovieComponent {
	@Input() movie!: Movie;

  constructor() { }

	getGenreNames(genres: { id: number; name: string }[]): string {
		return genres.map(genre => genre.name).join(', ');
	}

	getProductionCompanies(production_companies: { id: number; name: string }[]): string {
		return production_companies.map(production_companies => production_companies.name).join(', ');
	}

	setDefaultPoster(event: Event) {
		const img = event.target as HTMLImageElement;
		img.src = '/assets/images/no-image-placeholder.svg';
	}

	getOffset(rating: number): number {
    let percent = (rating / 10) * 376.99;
    return 376.99 - percent;
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

}