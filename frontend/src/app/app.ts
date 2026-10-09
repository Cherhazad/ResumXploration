import {Component, signal} from '@angular/core';
import {HeaderToolbar} from './header-toolbar/header-toolbar';
import {Home} from './home/home';

@Component({
  imports: [
    HeaderToolbar,
    Home,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
