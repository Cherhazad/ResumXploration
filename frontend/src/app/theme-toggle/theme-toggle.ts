import { Component, inject } from '@angular/core';
import {ThemeService} from '../../theme';
import {ButtonModule} from 'primeng/button';
import { Sun } from '@primeicons/angular/sun';
import { Moon } from '@primeicons/angular/moon';


@Component({
  imports: [
    ButtonModule, Sun, Moon
  ],
  selector: 'app-theme-toggle',
  styleUrl: './theme-toggle.css',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  protected readonly themeService = inject(ThemeService);

  onToggle(): void {
    this.themeService.toggle();
  }
}
