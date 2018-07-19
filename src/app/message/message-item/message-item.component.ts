import {
  Component, OnInit, Input,
  Output, EventEmitter, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver
} from '@angular/core';
import { MessageTemplateBase } from '../message-template-base';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: string;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  componentRef: ComponentRef<MessageTemplateBase>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.createComponent();
  }

  createComponent() {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory<MessageTemplateBase>(MessageComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = this.message;
    this.componentRef.instance.clicked = this.clicked;
  }

  destroyComponent() {
    this.componentRef.destroy();
  }
}
