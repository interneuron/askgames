import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageAnswersComponent } from './user-page-answers.component';

describe('UserPageAnswersComponent', () => {
  let component: UserPageAnswersComponent;
  let fixture: ComponentFixture<UserPageAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
