import {Component, signal} from '@angular/core';
import {Resume} from './resume/resume';
import {CardModule} from 'primeng/card';
import {HeaderToolbar} from './header-toolbar/header-toolbar';
import {Experiences} from './experiences/experiences';

@Component({
  imports: [
    Resume,
    CardModule,
    HeaderToolbar,
    Experiences
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
