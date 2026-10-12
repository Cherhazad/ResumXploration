import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LanguageService} from '../shared/services/language.service';

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

  downloadPdf() {
    const link = document.createElement('a')
    link.download = 'Résumé Chérhazad Boustani.pdf'
    link.href = '/CV.pdf'
    link.click()
  }

  isActive = false;
  isDarkMode = false;

  toggle(): void {
    this.isActive = !this.isActive;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode)
  }

}
