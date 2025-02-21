import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosCatalogoComponent } from './libros-catalogo.component';

describe('LibrosCatalogoComponent', () => {
  let component: LibrosCatalogoComponent;
  let fixture: ComponentFixture<LibrosCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
