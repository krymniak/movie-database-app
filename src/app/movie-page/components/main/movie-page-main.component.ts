import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieVideo, Video } from 'src/app/shared/interfaces/interface';
import { MovieService } from 'src/app/shared/services/movie.service';
import { delay, map, Observable, tap} from 'rxjs';


@Component({
  selector: 'app-movie-page-main',
  templateUrl: './movie-page-main.component.html',
  styleUrls: ['./movie-page-main.component.scss']
})
export class MoviePageMainComponent implements OnInit{

	movieId!: number | null
	movie$!: Observable<Movie>
	searchQuery!: string | null;
	video$!: Observable<Video[]>

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
			})
		)
	}

	

}