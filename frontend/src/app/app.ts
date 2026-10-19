import {AfterViewInit, Component} from '@angular/core';
import {HeaderToolbar} from './header-toolbar/header-toolbar';
import {Home} from './home/home';
import {Skills} from './skills/skills';
import {Projects} from './projects/projects';

@Component({
  imports: [
    HeaderToolbar,
    Home,
    Skills,
    Projects,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App implements AfterViewInit {
  private isMobile = window.innerWidth < 768

  private observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  }, {threshold: 0, rootMargin: '0px 0px -50px 0px'})

  ngAfterViewInit(): void {
    const hiddenElements = document.querySelectorAll('.hide-left, .hide-right')
    const els = document.querySelectorAll('.item')

    if (this.isMobile) {
      hiddenElements.forEach(el => el.classList.add('show'))
      els.forEach(el => el.classList.add('show'))
      return
    }

    hiddenElements.forEach(el => this.observer.observe(el))
    els.forEach(el => this.observer.observe(el))
  }
}
