import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamComponent } from './stream.component';
import { HttpClientModule } from "@angular/common/http";

describe('StreamComponent', () => {
  let component: StreamComponent;
  let fixture: ComponentFixture<StreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StreamComponent],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
