import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComercioComponent } from './listar-comercio.component';

describe('ListarComercioComponent', () => {
  let component: ListarComercioComponent;
  let fixture: ComponentFixture<ListarComercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComercioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
