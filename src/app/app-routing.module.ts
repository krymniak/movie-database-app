import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'search', loadChildren: () => import('./search-page/search-page.module').then(m => m.SearchPageModule)
  },
	{
    path: 'movie', loadChildren: () => import('./movie-page/movie-page.module').then(m => m.MoviePageModule)
  },
	{
    path: 'popular', loadChildren: () => import('./popular-page/popular-page.module').then(m => m.PopularPageModule)
  },
	{
    path: 'top-rated', loadChildren: () => import('./top-rated-page/top-rated-page.module').then(m => m.TopRatedPageModule)
  },
	{
    path: 'upcoming', loadChildren: () => import('./upcoming-page/upcoming-page.module').then(m => m.UpcomingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
