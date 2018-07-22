import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageComponent } from './message/message.component';
import { MessageEntryDirective } from './message-entry.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageItemComponent,
    MessageComponent,
    MessageEntryDirective
  ],
  entryComponents: [MessageComponent],
  exports: [MessageItemComponent]
})
export class MessageModule { }
