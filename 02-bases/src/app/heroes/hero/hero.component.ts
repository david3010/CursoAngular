import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public nameChanged: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHero(): void {
    this.nameChanged = true;
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.nameChanged = true;
    this.age = 50;
  }

  reset(): void {
    this.nameChanged = false;
    this.name = 'ironman';
    this.age = 45;
  }

}
