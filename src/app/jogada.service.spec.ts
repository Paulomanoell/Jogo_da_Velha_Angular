import { TestBed } from '@angular/core/testing';

import { JogadaService } from './jogada.service';

describe('JogadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JogadaService = TestBed.get(JogadaService);
    expect(service).toBeTruthy();
  });
});
