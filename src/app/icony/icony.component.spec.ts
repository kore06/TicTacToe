import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconyComponent } from './icony.component';

describe('IconyComponent', () => {
  let component: IconyComponent;
  let fixture: ComponentFixture<IconyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
