import { Component } from '@angular/core';


@Component({
  selector: 'app-main-page-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
query: string = ''

  constructor() { }

}