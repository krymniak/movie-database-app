import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';


@Component({
  selector: 'app-search-page-main',
  templateUrl: './search-page-main.component.html',
  styleUrls: ['./search-page-main.component.scss']
})
export class SearchPageMainComponent implements OnInit{

  constructor(
		private route: ActivatedRoute,
		private moviService: MovieService
		) { }

	searchQuery!: string | null;

	ngOnInit(): void {
    this.searchQuery = this.route.snapshot.queryParamMap.get('query');
		console.log(this.searchQuery)
		this.moviService.searchMovies(this.searchQuery).subscribe(data => console.log(data))
  }

}