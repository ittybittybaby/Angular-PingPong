import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessagesService {

  lastId: number = 0;

  messages: Message[] = [];

  constructor() {}

  postMessage(message: Message): MessagesService {
    if (!message.messageId) {
      message.messageId = ++this.lastId;
    }
    this.messages.push(message);
    return this;
  }

  deleteMessageById(id: number): MessagesService {
    this.messages = this.messages
      .filter(message => message.messageId !== id);
    console.log(this.messages);
    return this;
  }

  updateMessageById(messageId: number, content: string): Message {
    let message = this.getmessageById(messageId);
    if (!message) {
      return null;
    }
    message.content = content;
    return message;
  }

  getAllmessages(): Message[] {
    return this.messages;
  }

  getmessageById(id: number): Message {
    return this.messages
      .filter(message => message.messageId === id)
      .pop();
  }

}
