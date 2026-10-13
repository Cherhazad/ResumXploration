import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  imports: [
    NgOptimizedImage
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  downloadPdf() {
    const link = document.createElement('a')
    link.download = 'CV Chérhazad Boustani.pdf'
    link.href = '/CV.pdf'
    link.click()
  }
}
