import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  isEnglish = signal(false);
}
