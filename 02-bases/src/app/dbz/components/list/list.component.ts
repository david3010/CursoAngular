import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   @Input()
   public characters: Character[] = [];

   @Output()
   public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

   public onDelete(idx: number): void {
     this.onDeleteCharacter.emit(idx);
   }
}
