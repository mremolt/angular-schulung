import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputJokesFormComponent } from './input-jokes-form.component';

describe('InputJokesFormComponent', () => {
  let component: InputJokesFormComponent;
  let fixture: ComponentFixture<InputJokesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputJokesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputJokesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
