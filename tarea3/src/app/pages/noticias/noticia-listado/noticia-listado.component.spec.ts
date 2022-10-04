import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaListadoComponent } from './noticia-listado.component';

describe('NoticiaListadoComponent', () => {
  let component: NoticiaListadoComponent;
  let fixture: ComponentFixture<NoticiaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
