import { TestBed } from '@angular/core/testing';

import { HelpListService } from './help-list.service';

describe('HelpListService', () => {
  let service: HelpListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
