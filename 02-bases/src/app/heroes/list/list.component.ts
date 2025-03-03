import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  public heroRemoved?: string;

  removeLastHero(): void {
    this.heroRemoved = this.heroes.pop() || '';
  }
}
