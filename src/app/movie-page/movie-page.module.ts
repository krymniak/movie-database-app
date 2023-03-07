import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MoviePageMainComponent } from './components/main/movie-page-main.component';
import { MoviePageMovieComponent } from './components/movie/movie-page-movie.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { MoviePageImageExpanderComponent } from './components/image-expander/movie-page-image-expander.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
	{
		path: '',
		component: MoviePageMainComponent
	}
]

@NgModule({
  declarations: [
		MoviePageMainComponent,
		MoviePageMovieComponent,
		MoviePageImageExpanderComponent
  ],
  imports: [
    CommonModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatDialogModule,
		MatCardModule,
		MatButtonModule,
		RouterModule.forChild(routes)
  ],
	exports:[MoviePageMovieComponent,
		MoviePageImageExpanderComponent],
  providers: [],
  bootstrap: []
})
export class MoviePageModule { }