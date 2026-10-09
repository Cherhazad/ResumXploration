import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LanguageService} from '../shared/services/language.service';
import {HamburgerMenu} from '../hamburger-menu/hamburger-menu';

@Component({
  imports: [
    FormsModule,
    HamburgerMenu,
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
}
