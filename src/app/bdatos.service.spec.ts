import { TestBed } from '@angular/core/testing';

import { BdatosService } from './bdatos.service';

describe('BdatosService', () => {
  let service: BdatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
