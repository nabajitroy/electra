
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsDataTableComponent } from './sessions-data-table.component';

describe('SessionsDataTableComponent', () => {
  let component: SessionsDataTableComponent;
  let fixture: ComponentFixture<SessionsDataTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
