import { Component } from '@angular/core';
import { MessageTemplateBase } from './../message-template-base';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent extends MessageTemplateBase { }
