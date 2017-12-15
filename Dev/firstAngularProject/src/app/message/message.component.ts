import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Message} from './message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  // template: ``,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() message: Message;

  constructor(){}

  // messageId: number;
  // userId: number;
  // content: string;
  //
  // lastMessage: string;
  // constructor(private http: Http) {
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
  //}

}

