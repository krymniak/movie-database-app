import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageListComponent } from './components/list/search-page-list.component';
import { SearchPageMainComponent } from './components/main/search-page-main.component';

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
		RouterModule.forChild(routes)
  ],
	exports:[SearchPageListComponent],
  providers: [],
  bootstrap: []
})
export class SearchPageModule { }
