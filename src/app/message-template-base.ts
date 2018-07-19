import { Input } from '@angular/core';
export class MessageTemplateBase {
  private _message: string;
  public get message(): string {
    return this._message;
  }
  @Input()
  public set message(value: string) {
    this._message = value || '';
  }
}
