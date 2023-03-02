import { Component, Input, OnInit } from '@angular/core';
import { Images, Movie, Poster, SearchMovie, Video } from 'src/app/shared/interfaces/interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { MoviePageImageExpanderComponent } from '../image-expander/movie-page-image-expander.component';

@Component({
  selector: 'app-movie-page-movie',
  templateUrl: './movie-page-movie.component.html',
  styleUrls: ['./movie-page-movie.component.scss']
})
export class MoviePageMovieComponent implements OnInit{

	@Input() movie!: Movie;
	@Input() videos!: Video[] | null;
	@Input() images!: Poster[] | null;
	@Input() recomendations!: SearchMovie[] | null;

  constructor(
		private sanitizer: DomSanitizer,
		public dialog: MatDialog
		) { }

	ngOnInit(): void {
	}

	reloadPage() {
		setTimeout(() => {
			location.reload()
		}, 50)
  }
	openDialog(imageUrl: string) {
    const dialogRef = this.dialog.open(MoviePageImageExpanderComponent, {
      data: imageUrl
    });
  }


	getSafeUrl(videoId: string): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
	}


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