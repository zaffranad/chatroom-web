import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScreenComponent } from './welcome-screen.component';
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

describe('WelcomeScreenComponent', () => {
  let component: WelcomeScreenComponent;
  let fixture: ComponentFixture<WelcomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeScreenComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
