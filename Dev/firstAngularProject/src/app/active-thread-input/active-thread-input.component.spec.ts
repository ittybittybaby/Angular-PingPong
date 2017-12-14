import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveThreadInputComponent } from './active-thread-input.component';

describe('ActiveThreadInputComponent', () => {
  let component: ActiveThreadInputComponent;
  let fixture: ComponentFixture<ActiveThreadInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveThreadInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveThreadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
