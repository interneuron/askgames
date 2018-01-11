import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSideNavItemComponent } from './ui-side-nav-item.component';

describe('UiSideNavItemComponent', () => {
  let component: UiSideNavItemComponent;
  let fixture: ComponentFixture<UiSideNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSideNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSideNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
