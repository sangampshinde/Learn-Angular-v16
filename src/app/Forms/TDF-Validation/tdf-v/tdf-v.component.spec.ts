import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfVComponent } from './tdf-v.component';

describe('TdfVComponent', () => {
  let component: TdfVComponent;
  let fixture: ComponentFixture<TdfVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdfVComponent]
    });
    fixture = TestBed.createComponent(TdfVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
