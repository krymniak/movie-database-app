import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces/interface';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-movie-page-main',
  templateUrl: './movie-page-main.component.html',
  styleUrls: ['./movie-page-main.component.scss']
})
export class MoviePageMainComponent implements OnInit{

	movie$!: Observable<Movie>
	searchQuery!: string | null;

  constructor(
		private route: ActivatedRoute,
		private moviService: MovieService
	) { }


	ngOnInit(): void {
		this.searchQuery = this.route.snapshot.queryParamMap.get('query');
		this.movie$ = this.moviService.getMovieDetails(this.searchQuery)
	}

	getGenreNames(genres: { id: number; name: string }[]): string {
		return genres.map(genre => genre.name).join(', ');
	}

	getProductionCompanies(production_companies: { id: number; name: string }[]): string {
		return production_companies.map(production_companies => production_companies.name).join(', ');
	}
}