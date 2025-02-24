import { TestBed } from '@angular/core/testing';

import { TranslationServService } from './translation-serv.service';

describe('TranslationServService', () => {
  let service: TranslationServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
