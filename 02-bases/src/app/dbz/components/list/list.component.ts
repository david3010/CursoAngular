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
   public onDelete: EventEmitter<string> = new EventEmitter<string>();

   public onDeleteCharacter(id?: string): void {
     if (!id) return;
     this.onDelete.emit(id);
   }
}
