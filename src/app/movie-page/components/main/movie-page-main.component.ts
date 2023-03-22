import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Images, Movie, MovieVideo, Poster, SearchMovie, SearchMovieResponse, Video } from 'src/app/shared/interfaces/interface';
import { delay, map, Observable, tap} from 'rxjs';
import { AppStateInterface } from 'src/app/shared/interfaces/appState.interface';
import { select, Store } from '@ngrx/store';
import * as GetMovieActions from 'src/app/movie-page/store/actions'
import { selectGetImages, selectGetMovie, selectGetRecomendations, selectGetVideo } from '../../store/selectors';


@Component({
  selector: 'app-movie-page-main',
  templateUrl: './movie-page-main.component.html',
  styleUrls: ['./movie-page-main.component.scss']
})
export class MoviePageMainComponent implements OnInit{

	showScrollButton = false;
	movieId!: number | null
	movie$!: Observable<Movie | null>
	searchQuery!: string | null;
	video$!: Observable<Video[]>
	images$!: Observable<Poster[]>
	recomendations$!: Observable<SearchMovie[]>

	@HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.showScrollButton = window.pageYOffset > 500;
  }

  constructor(
		private route: ActivatedRoute,
		private store: Store<AppStateInterface>
	) { }


	ngOnInit(): void {
		this.searchQuery = this.route.snapshot.queryParamMap.get('query');
		this.store.dispatch(GetMovieActions.getMovie({query: this.searchQuery}))
		this.movie$ = this.store.pipe(select(selectGetMovie))
		this.store.dispatch(GetMovieActions.getVideo({movieId: parseInt(this.searchQuery!)}));
		this.video$ = this.store.pipe(select(selectGetVideo));
		this.store.dispatch(GetMovieActions.getImages({movieId: parseInt(this.searchQuery!)}));
		this.images$ = this.store.pipe(select(selectGetImages));
		this.store.dispatch(GetMovieActions.getRecomendations({movieId: parseInt(this.searchQuery!)}));
		this.recomendations$ = this.store.pipe(select(selectGetRecomendations))
	}

	scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}