import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHeroeComponent } from './detalle-heroe.component';

describe('DetalleHeroeComponent', () => {
  let component: DetalleHeroeComponent;
  let fixture: ComponentFixture<DetalleHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
