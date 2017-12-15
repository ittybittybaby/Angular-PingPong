import { Component, OnInit } from '@angular/core';
import {Message} from '../message/message';
import {MessagesService} from '../message/messages.service';
import {Observable} from 'rxjs/Observable';
import {InputComponent} from '../active-thread-input/input.component';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit{

  messages: Message[];
  postMessage: Message;

  constructor(private messagesService: MessagesService) {}

  subscribeToMessages(): void {
    this.messagesService.getMessageFromDB().subscribe(messages => this.messages = messages)
  }

  selectMessage(message: Message): void {
    this.postMessage = message;
  }

  ngOnInit() {
    this.subscribeToMessages();
  }

  // messageId: number;
  // userId: number;
  // content: string;
  //
  // constructor(private http: Http) {
  //   // this.lastMessage = messageService.getAllmessages()[messageService.getAllmessages().length - 1].content;
  //   http.get('./messages.json')
  //     .map(response => response.json())
  //     .subscribe(
  //       message => {
  //         this.messageId = message.messageId;
  //         this.userId = message.userId;
  //         this.content = message.content;
  //       },
  //       error => console.error(error));
  //   console.log(http.get('./messages.json'));
  // }
  // // displayMessage() {
  // //   this.clickEmitter.subscribe(clickEvent => this.clicks.push(clickEvent));
  // // }
  //
  // ngOnInit() {
  // }

}
