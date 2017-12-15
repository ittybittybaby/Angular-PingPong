import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { Message } from '../message/message';
import {MessagesService} from '../message/messages.service';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import {Subscription} from 'rxjs/Subscription';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  // template: `
  //   <textarea type="text" id="form8" class="md-textarea" (keydown)="emitWordCount()" placeholder="Type something, ya' bitch boy" ></textarea>
  // `,
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private messageService: MessagesService) {}

  createMessage(message) {
    console.log(message.value);
    this.messageService.postMessage(message.value);
    console.log(this.messageService.message);

    message.value = null;
    document.getElementById("messages").scrollTop = document.getElementById("bottom").scrollHeight;
    function scrollToElementD(){
      var topPos = document.getElementById('inner-element').offsetTop;
      document.getElementById('container').scrollTop = topPos-10;
    }
  }



  // @ViewChild('btn') btn;
  // @Input() text: string;
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  // private clickSubject_: Subject<Event> = new Subject<Event>();
  // clickEmitter: Observable<Event>;
  // subscription: Subscription;
  // clicks: Array<Event> = [];
  //
  // onClick(message): void {
  //   message.value = null;
  //   this.notify.emit(message);
  // }
  //
  // ngAfterViewInit(): void {
  //
  //   this.clickEmitter = Observable.fromEvent(this.btn.nativeElement, 'click');
  //
  //
  // }

  // constructor() {
  //   this.clickEmitter = this.clickSubject_.asObservable();
  //
  // }
  //
  // publish(e: Event): void {
  //   this.clickSubject_.next(e);
  // }

}
