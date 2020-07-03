import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisRetourComponent } from './frais-retour.component';

describe('FraisRetourComponent', () => {
  let component: FraisRetourComponent;
  let fixture: ComponentFixture<FraisRetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraisRetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraisRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
