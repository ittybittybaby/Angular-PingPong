import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../message/message';
import {MessagesService} from '../message/messages.service';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  newMessage: Message;

  @Input() text: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {

    this.text = (<HTMLInputElement>document.getElementById("form8")).value;

    document.getElementById("messages").innerHTML += `${this.text}`;
    document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight*2;

    this.newMessage = new Message(1, this.text);
    MessagesService.
    console.log(this.newMessage);
  }

  ngOnInit() {
  }

}
