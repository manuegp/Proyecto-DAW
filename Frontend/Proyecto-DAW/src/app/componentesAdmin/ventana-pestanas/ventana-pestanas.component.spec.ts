import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaPestanasComponent } from './ventana-pestanas.component';

describe('VentanaPestanasComponent', () => {
  let component: VentanaPestanasComponent;
  let fixture: ComponentFixture<VentanaPestanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaPestanasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaPestanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
