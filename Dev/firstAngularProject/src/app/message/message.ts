import {EventEmitter, Input, Output} from '@angular/core';

export class Message {

  messageId: number;
  userId: number;
  private _content: string = '';

  constructor(userId: number, content: string) {
    this.userId = userId;
    this._content = content;

  }


  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}
