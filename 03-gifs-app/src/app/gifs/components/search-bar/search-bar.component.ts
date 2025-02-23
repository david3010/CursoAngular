import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-bar',
  standalone: false,
  template: `
    <h5>Search:</h5>
    <input
      type="text"
      placeholder="Search..."
      class="form-control"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  txtTagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.txtTagInput.nativeElement.value

    this.gifsService.searchTag(newTag)

    this.txtTagInput.nativeElement.value = ''
  }
}
