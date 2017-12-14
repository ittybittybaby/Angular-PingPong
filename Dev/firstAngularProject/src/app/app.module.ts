import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import { MessageComponent } from './message/message.component';
import {InputComponent} from './active-thread-input/input.component';
import { ThreadComponent } from './thread/thread.component';
import {Message} from './message/message';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SideBarComponent,
    MessageComponent,
    ThreadComponent
  ],
  router: [],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
