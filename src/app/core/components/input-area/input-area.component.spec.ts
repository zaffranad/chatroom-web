import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAreaComponent } from './input-area.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

describe('InputAreaComponent', () => {
  let component: InputAreaComponent;
  let fixture: ComponentFixture<InputAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputAreaComponent],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
