import { Component, OnInit, HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap, mergeMap} from 'rxjs';
import { SearchMovie, SearchMovieResponse } from 'src/app/shared/interfaces/interface';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-top-rated-page-main',
  templateUrl: './top-rated-page-main.component.html',
  styleUrls: ['./top-rated-page-main.component.scss']
})
export class TopRatedPageMainComponent implements OnInit{
	dateFrom!: Date;
	dateTo!: Date;
	userScoreMinValue: number = 1;
	userScoreMaxValue: number = 9;
	runtimeMinValue: number = 0;
	runtimeMaxValue: number = 400;
	genres = [{
		"id": 28,
		"name": "Action"
	},
	{
		"id": 12,
		"name": "Adventure"
	},
	{
		"id": 16,
		"name": "Animation"
	},
	{
		"id": 35,
		"name": "Comedy"
	},
	{
		"id": 80,
		"name": "Crime"
	},
	{
		"id": 99,
		"name": "Documentary"
	},
	{
		"id": 18,
		"name": "Drama"
	},
	{
		"id": 10751,
		"name": "Family"
	},
	{
		"id": 14,
		"name": "Fantasy"
	},
	{
		"id": 36,
		"name": "History"
	},
	{
		"id": 27,
		"name": "Horror"
	},
	{
		"id": 10402,
		"name": "Music"
	},
	{
		"id": 9648,
		"name": "Mystery"
	},
	{
		"id": 10749,
		"name": "Romance"
	},
	{
		"id": 878,
		"name": "Science Fiction"
	},
	{
		"id": 10770,
		"name": "TV Movie"
	},
	{
		"id": 53,
		"name": "Thriller"
	},
	{
		"id": 10752,
		"name": "War"
	},
	{
		"id": 37,
		"name": "Western"
	}];
	selectedChips: number[] = [];


	showScrollButton = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.showScrollButton = window.pageYOffset > 500;
  }

  constructor(
		private route: ActivatedRoute,
		private moviService: MovieService
		) { }

	movieList$!: Observable<SearchMovie[]>

	message: string | null = '';

	ngOnInit(): void {
		this.movieList$ = this.moviService.getTopRatedMovies().pipe(
			mergeMap(response1 => this.moviService.getTopRatedMovies2().pipe(map((response2) => {
				return {
					page: response2.page,
					results: [...response1.results, ...response2.results],
					total_pages: response2.total_pages,
					total_results: response2.total_results
				}
			}))),
			tap((data: SearchMovieResponse) => {
				if (data.results.length == 0) {
					this.message = 'There are no movies that matched your query.'
				}
			}
		),
			map(data => data.results)
		
		)
  }

	selectChip(event: MouseEvent, genre: number): void {
    event.preventDefault();
    if (this.selectedChips.includes(genre)) {
      const index = this.selectedChips.indexOf(genre);
      this.selectedChips.splice(index, 1);
    } else {
      this.selectedChips.push(genre);
    }
  }


	filter() {
		this.movieList$ = this.movieList$.pipe(
			map(movies => movies.filter((movie: SearchMovie) => {
				let matchesSelectedGenres = true;
				if (this.selectedChips.length > 0) {
					matchesSelectedGenres = movie.genre_ids.some(id => this.selectedChips.includes(id));
				}
				const userScoreInRange = movie.vote_average >= this.userScoreMinValue && movie.vote_average <= this.userScoreMaxValue;
				let releaseDateInRange = true;
				if (this.dateFrom && this.dateTo) {
					const movieReleaseDate = new Date(movie.release_date);
					releaseDateInRange = movieReleaseDate >= this.dateFrom && movieReleaseDate <= this.dateTo;
				}
				return matchesSelectedGenres && userScoreInRange && releaseDateInRange;
			})),
			tap((movies:SearchMovie[]) => {
				if(movies.length === 0) {
					this.message = 'There are no movies that matched your query.'
				} else this.message = null
			})
		)
	}

	sort(criteria: string) {
		switch (criteria) {
			case 'rating':
				this.movieList$ = this.movieList$.pipe(
					map(movies => [...movies].sort((a, b) => b.vote_average - a.vote_average))
				);
				break;
			case 'release_date':
				this.movieList$ = this.movieList$.pipe(
					map(movies => [...movies].sort((a, b) => a.release_date.localeCompare(b.release_date)))
				);
				break;
			case 'title':
				this.movieList$ = this.movieList$.pipe(
					map(movies => [...movies].sort((a, b) => a.title.localeCompare(b.title)))
				);
				break;
			case 'popularity':
				this.movieList$ = this.movieList$.pipe(
					map(movies => [...movies].sort((a, b) => b.popularity - a.popularity))
				);
		}
	}

	scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}