import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() {}

  ngOnInit() {}
}
