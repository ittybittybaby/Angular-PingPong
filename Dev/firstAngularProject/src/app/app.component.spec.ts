import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {InputComponent} from './active-thread-input/input.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputComponent,
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
