import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageListComponent } from './components/list/search-page-list.component';
import { SearchPageMainComponent } from './components/main/search-page-main.component';
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

const routes: Routes = [
	{
		path: '',
		component: SearchPageMainComponent
	}
]

@NgModule({
  declarations: [
		SearchPageMainComponent,
		SearchPageListComponent
  ],
  imports: [
    CommonModule,
		MatIconModule,
		FormsModule,
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
	exports:[SearchPageListComponent],
  providers: [],
  bootstrap: []
})
export class SearchPageModule { }
