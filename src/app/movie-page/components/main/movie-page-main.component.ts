import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Images, Movie, MovieVideo, Poster, SearchMovie, SearchMovieResponse, Video } from 'src/app/shared/interfaces/interface';
import { MovieService } from 'src/app/shared/services/movie.service';
import { delay, map, Observable, tap} from 'rxjs';


@Component({
  selector: 'app-movie-page-main',
  templateUrl: './movie-page-main.component.html',
  styleUrls: ['./movie-page-main.component.scss']
})
export class MoviePageMainComponent implements OnInit{

	showScrollButton = false;
	movieId!: number | null
	movie$!: Observable<Movie>
	searchQuery!: string | null;
	video$!: Observable<Video[]>
	images$!: Observable<Poster[]>
	recomendations$!: Observable<SearchMovie[]>

	@HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.showScrollButton = window.pageYOffset > 500; // adjust the threshold as needed
  }

  constructor(
		private route: ActivatedRoute,
		private moviService: MovieService
	) { }


	ngOnInit(): void {
		this.searchQuery = this.route.snapshot.queryParamMap.get('query');
		this.movie$ = this.moviService.getMovieDetails(this.searchQuery).pipe(
			tap((movie: Movie) => {
				this.movieId = movie.id
				this.video$ = this.moviService.getVideo(this.movieId).pipe(
					map((data: MovieVideo) => {
						return data.results
					})
				)
				this.images$ = this.moviService.getImages(this.movieId).pipe(
					map((data: Images) => {
						return data.posters
					})
				)
				this.recomendations$ = this.moviService.getRecommendations(this.movieId).pipe(
					map((data: SearchMovieResponse) => {
						return data.results
					})
				)
			})
		)
	}

	scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}