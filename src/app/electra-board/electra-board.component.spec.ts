
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectraBoardComponent } from './electra-board.component';

describe('ElectraBoardComponent', () => {
  let component: ElectraBoardComponent;
  let fixture: ComponentFixture<ElectraBoardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectraBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectraBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
