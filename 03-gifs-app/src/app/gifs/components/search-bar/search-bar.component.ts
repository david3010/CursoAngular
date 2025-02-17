import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-bar',
  standalone: false,
  template: `
    <h5>Search:</h5>
    <input
    type="text"
    placeholder="Search..."
    class="form-control" />
  `,
})
export class SearchBoxComponent {

}
