import {Component, signal} from '@angular/core';
import {Resume} from './resume/resume';
import {CardModule} from 'primeng/card';
import {HeaderToolbar} from './header-toolbar/header-toolbar';

@Component({
  imports: [
    Resume,
    CardModule,
    HeaderToolbar
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
