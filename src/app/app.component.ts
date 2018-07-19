import { MessageTemplateBase } from './message-template-base';
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentRef: ComponentRef<MessageTemplateBase>;
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(message?: string) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory<MessageTemplateBase>(MessageComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = message;
  }

  destoryComponent() {
    this.componentRef.destroy();
  }
}
