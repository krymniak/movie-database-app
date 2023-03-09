import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PopularPageMainComponent } from './components/main/popular-page-main.component';

const routes: Routes = [
	{
		path: '',
		component: PopularPageMainComponent
	}
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
		MatIconModule,
		MatButtonModule,
		RouterModule.forChild(routes)
  ],
	exports:[],
  providers: [],
  bootstrap: []
})
export class PopularPageModule { }
