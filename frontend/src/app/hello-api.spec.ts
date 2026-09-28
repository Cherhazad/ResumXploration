import { TestBed } from '@angular/core/testing';
import { HelloApi } from './hello-api';

describe('HelloApi', () => {
  let service: HelloApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
