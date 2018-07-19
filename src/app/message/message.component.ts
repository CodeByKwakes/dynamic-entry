import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private _message: string;
  public get message(): string {
    return this._message;
  }
  @Input()
  public set message(value: string) {
    this._message = value || '';
  }

  constructor() { }

  ngOnInit() {
  }

}
