import { Component } from '@angular/core';
import { MessageTemplateBase } from '../message-template-base';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent extends MessageTemplateBase { }
