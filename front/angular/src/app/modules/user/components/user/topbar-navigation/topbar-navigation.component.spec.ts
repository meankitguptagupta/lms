import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarNavigationComponent } from './topbar-navigation.component';

describe('TopbarNavigationComponent', () => {
  let component: TopbarNavigationComponent;
  let fixture: ComponentFixture<TopbarNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
