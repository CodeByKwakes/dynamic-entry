import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageItemComponent,
    MessageComponent
  ],
  entryComponents: [MessageComponent],
  exports: [MessageItemComponent]
})
export class MessageModule { }
