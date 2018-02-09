import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageTopicsComponent } from './user-page-topics.component';

describe('UserPageTopicsComponent', () => {
  let component: UserPageTopicsComponent;
  let fixture: ComponentFixture<UserPageTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
