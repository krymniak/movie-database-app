import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-page-image-expander',
  templateUrl: './movie-page-image-expander.component.html',
  styleUrls: ['./movie-page-image-expander.component.scss']
})
export class MoviePageImageExpanderComponent implements OnInit{

    constructor(
			@Inject(MAT_DIALOG_DATA) public data: string
  ) {}

	ngOnInit(): void {
	}

}