
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap} from 'rxjs';
import { SearchMovie, SearchMovieResponse } from 'src/app/shared/interfaces/interface';
import { MovieService } from 'src/app/shared/services/movie.service';


@Component({
  selector: 'app-popular-page-main',
  templateUrl: './popular-page-main.component.html',
  styleUrls: ['./popular-page-main.component.scss']
})
export class PopularPageMainComponent implements OnInit{

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

	searchQuery!: string | null;
	message = '';

	ngOnInit(): void {
    this.searchQuery = this.route.snapshot.queryParamMap.get('query');
		this.movieList$ = this.moviService.searchMovies(this.searchQuery).pipe(
			tap((data: SearchMovieResponse) => {
				if (data.results.length == 0) {
					this.message = 'There are no movies that matched your query.'
				}
			}
		),
			map(data => data.results)
		
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