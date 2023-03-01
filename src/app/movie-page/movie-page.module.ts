import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MoviePageMainComponent } from './components/main/movie-page-main.component';
import { MoviePageMovieComponent } from './components/movie/movie-page-movie.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
	{
		path: '',
		component: MoviePageMainComponent
	}
]

@NgModule({
  declarations: [
		MoviePageMainComponent,
		MoviePageMovieComponent
  ],
  imports: [
    CommonModule,
		MatProgressSpinnerModule,
		MatCardModule,
		MatButtonModule,
		RouterModule.forChild(routes)
  ],
	exports:[MoviePageMovieComponent],
  providers: [],
  bootstrap: []
})
export class MoviePageModule { }