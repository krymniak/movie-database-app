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
import { UpcomingPageMainComponent } from './components/main/upcoming-page-main.component';
import { UpcomingPageListComponent } from './components/list/upcoming-page-list.component';
import { StoreModule } from '@ngrx/store';
import { getUpcomingMoviesReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { UpcomingMoviesEffects } from './store/effects';

const routes: Routes = [
	{
		path: '',
		component: UpcomingPageMainComponent
	}
]

@NgModule({
  declarations: [
		UpcomingPageMainComponent,
		UpcomingPageListComponent
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
		StoreModule.forFeature('upcomingList', getUpcomingMoviesReducer),
		EffectsModule.forFeature([UpcomingMoviesEffects]),
		RouterModule.forChild(routes)
  ],
	exports:[],
  providers: [],
  bootstrap: []
})
export class UpcomingPageModule { }
