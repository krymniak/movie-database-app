import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main/main-page.component';

const routes: Routes = [
	{
		path: '',
		component: MainPageComponent
	}
]

@NgModule({
  declarations: [
		MainPageComponent
  ],
  imports: [
    CommonModule,
		RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class MainPageModule { }
