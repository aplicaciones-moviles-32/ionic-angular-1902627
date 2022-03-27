import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverPerfilComponent } from './popover-perfil.component';

describe('PopoverPerfilComponent', () => {
  let component: PopoverPerfilComponent;
  let fixture: ComponentFixture<PopoverPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
