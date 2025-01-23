import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,

  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 10;

  handleAddClick(): void {
    this.counter++;
  }

  handleSubstractClick(): void {
    this.counter--;
  }

  handleResetClick(): void {
    this.counter = 0;
  }
}
