import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfvComponent } from './rfv.component';

describe('RfvComponent', () => {
  let component: RfvComponent;
  let fixture: ComponentFixture<RfvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RfvComponent]
    });
    fixture = TestBed.createComponent(RfvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
