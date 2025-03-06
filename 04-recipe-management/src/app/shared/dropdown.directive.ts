import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: false,
})
// This class is a directive that handles opening and closing the dropdown menu
export class DropdownDirective {
  // hidden: boolean;

  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // ngOnInit(): void {
  //   this.hidden = true;
  // }

  // @HostListener('click') onMouseEnter(eventData: Event) {
  //   if (this.hidden) {
  //     this.renderer.addClass(this.elRef.nativeElement, 'open');
  //     this.hidden = false;
  //   } else {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //     this.hidden = true;
  //   }
  // }

  // The open class is added or removed from the element that has the directive
  // @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  // This directive listens to the document click event and toggles the open class
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
