import {Injectable, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {inject} from 'vitest';

@Injectable({ providedIn: 'root' })
export class HelloApi {
  constructor(private readonly http: HttpClient) {}

  getHello() {
    return this.http.get<{ message: string }>('/api/hello');
  }
}
