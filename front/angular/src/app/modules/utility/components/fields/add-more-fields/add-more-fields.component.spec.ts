import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreFieldsComponent } from './add-more-fields.component';

describe('AddMoreFieldsComponent', () => {
  let component: AddMoreFieldsComponent;
  let fixture: ComponentFixture<AddMoreFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoreFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoreFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
