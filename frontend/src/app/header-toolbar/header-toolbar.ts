import {Component, inject, signal} from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {Toolbar} from 'primeng/toolbar';
import {ThemeToggle} from '../theme-toggle/theme-toggle';
import {ButtonDirective} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {Upload} from '@primeicons/angular/upload';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {FormsModule} from '@angular/forms';
import {Tooltip} from 'primeng/tooltip';
import {LanguageService} from '../language.service';

@Component({
  imports: [
    Avatar,
    Upload,
    Toolbar,
    ThemeToggle,
    ButtonDirective,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    ToggleSwitch,
    FormsModule,
    Tooltip
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
