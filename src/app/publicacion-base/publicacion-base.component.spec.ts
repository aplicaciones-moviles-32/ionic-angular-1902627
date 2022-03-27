import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionBaseComponent } from './publicacion-base.component';

describe('PublicacionBaseComponent', () => {
  let component: PublicacionBaseComponent;
  let fixture: ComponentFixture<PublicacionBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
