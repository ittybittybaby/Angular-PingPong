import { Injectable } from '@angular/core';
import { Message } from './message';
import {mockMessages} from './mockMessages';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MessagesService {

  message: Message;

  postMessage(input: string) {
    this.message = new Message(1, input);
    this.sendToDB(this.message);
  }

  sendToDB(message: Message): void {
    console.log(message);
    mockMessages.push(message);
    console.log(mockMessages.length);
  }

  getMessageFromDB(): Observable<Message[]>{
    return of (mockMessages)
  }

  //lastId: number = 0;

  // messages: Message[] = [];


  // getLastMessage() {
  //   if(this.messages.length != 0) {
  //
  //     return this.messages[this.messages.length - 1];
  //   }
  //   else {
  //     return null;
  //   }
  // }
  //
  // postMessage(message: Message): MessagesService {
  //   if (!message.messageId) {
  //     message.messageId = ++this.lastId;
  //   }
  //   this.messages.push(message);
  //   return this;
  // }
  //
  // deleteMessageById(id: number): MessagesService {
  //   this.messages = this.messages
  //     .filter(message => message.messageId !== id);
  //   console.log(this.messages);
  //   return this;
  // }
  //
  // updateMessageById(messageId: number, content: string): Message {
  //   let message = this.getmessageById(messageId);
  //   if (!message) {
  //     return null;
  //   }
  //   message.content = content;
  //   return message;
  // }
  //
  // getAllmessages(): Message[] {
  //   return this.messages;
  // }
  //
  // getmessageById(id: number): Message {
  //   return this.messages
  //     .filter(message => message.messageId === id)
  //     .pop();
  // }

}
