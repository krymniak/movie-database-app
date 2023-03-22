import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PopularPageMainComponent } from './components/main/popular-page-main.component';
import { PopularPageListComponent } from './components/list/popular-page-list.component';
import { StoreModule } from '@ngrx/store';
import { getPopularMoviesReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PopularMoviesEffects } from './store/effects';

const routes: Routes = [
	{
		path: '',
		component: PopularPageMainComponent
	}
]

@NgModule({
  declarations: [
		PopularPageMainComponent,
		PopularPageListComponent
  ],
  imports: [
    CommonModule,
		MatIconModule,
		FormsModule,
		MatProgressSpinnerModule,
		MatChipsModule,
		MatNativeDateModule,
		MatInputModule,
		MatDatepickerModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatSliderModule,
		MatButtonModule,
		StoreModule.forFeature('popularList', getPopularMoviesReducer),
		EffectsModule.forFeature([PopularMoviesEffects]),
		RouterModule.forChild(routes)
  ],
	exports:[],
  providers: [],
  bootstrap: []
})
export class PopularPageModule { }
