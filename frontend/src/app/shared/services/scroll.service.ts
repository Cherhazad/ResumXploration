import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ScrollService {
  private scrollTarget$ = new Subject<string>()

  scroll$ = this.scrollTarget$.asObservable()

  scrollTo(id: string): void {
    this.scrollTarget$.next(id)
  }
}
