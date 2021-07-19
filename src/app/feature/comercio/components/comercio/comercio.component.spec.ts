import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioComponent } from './comercio.component';

describe('ComercioComponent', () => {
  let component: ComercioComponent;
  let fixture: ComponentFixture<ComercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
