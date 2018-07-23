import {
  ComponentFactoryResolver, ComponentRef, Directive,
  OnChanges, OnInit, ViewContainerRef, OnDestroy
} from '@angular/core';
import { MessageTemplateBase } from './message-template-base';
import { MessageComponent } from './message/message.component';

@Directive({
  selector: '[appMessageEntry]'
})
export class MessageEntryDirective
  extends MessageTemplateBase
  implements OnChanges, OnInit, OnDestroy {

  componentRef: ComponentRef<MessageTemplateBase>;

  constructor(
    public viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver) {
    super();
  }

  ngOnChanges() {
    if (this.componentRef) {
      this.componentRef.instance.message = this.message;
      this.componentRef.instance.clicked = this.clicked;
    }
  }

  ngOnInit(): void {
    this.viewContainer.clear();
    const factory = this.resolver.resolveComponentFactory<MessageTemplateBase>(MessageComponent);
    this.componentRef = this.viewContainer.createComponent(factory);
    this.componentRef.instance.message = this.message;
    this.componentRef.instance.clicked = this.clicked;
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
