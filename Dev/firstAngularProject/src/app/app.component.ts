import { Component } from '@angular/core';
import {Message} from './message/message';
import {Subscription} from 'rxjs/Subscription';
import {MessagesService} from './message/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
   // styleUrls: ['../styles.css']
})

export class AppComponent {

  // message: any;
  // subscription: Subscription;

  constructor() {
    // this.subscription = this.messageService.getMessage().subscribe(message => this.message = message)
  }
}
