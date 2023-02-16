import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main/main-page.component';
import { SearchComponent } from './components/search/search.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		component: MainPageComponent
	}
]

@NgModule({
  declarations: [
		MainPageComponent,
		SearchComponent,
  ],
  imports: [
    CommonModule,
		MatButtonModule,
		FormsModule,
		MatInputModule,
		RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class MainPageModule { }
