import { Input, Output, EventEmitter } from '@angular/core';
export class MessageTemplateBase {
  private _message: string;
  public get message(): string {
    return this._message;
  }
  @Input()
  public set message(value: string) {
    this._message = value || '';
  }
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
}
