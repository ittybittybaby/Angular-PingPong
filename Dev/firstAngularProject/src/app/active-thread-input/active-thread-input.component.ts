import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './active-thread-input.component.html',
  styleUrls: ['./active-thread-input.component.css']
})
export class ActiveThreadInputComponent implements OnInit {

  button: HTMLElement = document.getElementById("post");
  display: HTMLElement = document.getElementById("messages");

  constructor() { }

  @Input() text: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    document.getElementById("messages").innerHTML += '<h3>Oh, fuck yeah! LOOK AT THIS BUTTON!</h3>';
    document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight*2;
  }

  ngOnInit() {
  }

}
