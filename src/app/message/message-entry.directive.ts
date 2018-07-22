import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMessageEntry]'
})
export class MessageEntryDirective {

  constructor(public viewContainer: ViewContainerRef) { }

}
