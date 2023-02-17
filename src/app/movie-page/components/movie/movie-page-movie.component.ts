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

}