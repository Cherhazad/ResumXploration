import {Component} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
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
    const hiddenElements = document.querySelectorAll('.hide')
    if (this.isMobile) {
      hiddenElements.forEach(el => el.classList.add('show'))
    }

    hiddenElements.forEach(el => this.observer.observe(el))
  }
}
