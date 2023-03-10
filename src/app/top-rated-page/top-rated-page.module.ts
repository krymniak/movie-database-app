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
import { TopRatedPageMainComponent } from './components/main/top-rated-page-main.component';
import { TopRatedPageListComponent } from './components/list/top-rated-page-list.component';

const routes: Routes = [
	{
		path: '',
		component: TopRatedPageMainComponent
	}
]

@NgModule({
  declarations: [
		TopRatedPageMainComponent,
		TopRatedPageListComponent
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
		RouterModule.forChild(routes)
  ],
	exports:[],
  providers: [],
  bootstrap: []
})
export class TopRatedPageModule { }
