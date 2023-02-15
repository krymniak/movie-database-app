import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageMainComponent } from './components/main/search-page-main.component';

const routes: Routes = [
	{
		path: '',
		component: SearchPageMainComponent
	}
]

@NgModule({
  declarations: [
		SearchPageMainComponent
  ],
  imports: [
    CommonModule,
		RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class SearchPageModule { }
