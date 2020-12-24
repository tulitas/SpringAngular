import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinEmployeePositionListComponent } from './join-employee-position-list.component';

describe('JoinEmployeePositionListComponent', () => {
  let component: JoinEmployeePositionListComponent;
  let fixture: ComponentFixture<JoinEmployeePositionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinEmployeePositionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinEmployeePositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
