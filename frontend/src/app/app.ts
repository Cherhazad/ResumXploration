import {Component, signal} from '@angular/core';
import {HeaderToolbar} from './header-toolbar/header-toolbar';
import {Home} from './home/home';
import {Skills} from './skills/skills';

@Component({
  imports: [
    HeaderToolbar,
    Home,
    Skills,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
