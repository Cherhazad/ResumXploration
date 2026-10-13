import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LanguageService} from '../shared/services/language.service';
import {ScrollService} from '../shared/services/scroll.service';

@Component({
  imports: [
    FormsModule,
  ],
  selector: 'app-header-toolbar',
  styleUrl: './header-toolbar.css',
  templateUrl: './header-toolbar.html',
})
export class HeaderToolbar {
  protected languageService = inject(LanguageService);

  isActive = false;
  isDarkMode = false;

  toggle(): void {
    this.isActive = !this.isActive;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode)
  }

  private scrollService = inject(ScrollService);

  scrollToSection(id: string): void {
    this.scrollService.scrollTo(id);
  }
}
