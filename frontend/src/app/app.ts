import { Component, signal } from '@angular/core';
import {Resume} from './resume/resume';
import { CardModule } from 'primeng/card';
import {ThemeToggle} from './theme-toggle/theme-toggle';

@Component({
  imports: [
    Resume,
    CardModule,
    ThemeToggle
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
