import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { CoreModule } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        CoreModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
