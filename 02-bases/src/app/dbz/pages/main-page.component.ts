import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})
export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Goku',
    power: 10000
  }, {
    name: 'Vegeta',
    power: 9000
  },
  {
    name: 'Krillin',
    power: 5000
  }];

}
