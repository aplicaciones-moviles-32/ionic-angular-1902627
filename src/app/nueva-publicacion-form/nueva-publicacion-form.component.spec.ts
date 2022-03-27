import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPublicacionFormComponent } from './nueva-publicacion-form.component';

describe('NuevaPublicacionFormComponent', () => {
  let component: NuevaPublicacionFormComponent;
  let fixture: ComponentFixture<NuevaPublicacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPublicacionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPublicacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
