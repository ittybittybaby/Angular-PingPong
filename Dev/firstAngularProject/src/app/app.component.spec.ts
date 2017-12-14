import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {ActiveThreadInputComponent} from './active-thread-input/active-thread-input.component';
import {MessagesService} from './message/messages.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActiveThreadInputComponent,
        SideBarComponent
        // MessagesService
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
