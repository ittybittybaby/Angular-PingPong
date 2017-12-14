import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ActiveThreadInputComponent} from './active-thread-input/active-thread-input.component';
import {SideBarComponent} from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveThreadInputComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
