import {Component, inject} from '@angular/core';
import {CardDetails} from '../shared/interfaces/card-details.interface';
import {ScrollService} from '../shared/services/scroll.service';
import {Subscription} from 'rxjs';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  private sub!: Subscription

  ngOnInit(): void {
    this.sub = this.scrollService.scroll$.subscribe(id => {
      const element = document.getElementById(id)
      element?.scrollIntoView({behavior: 'smooth', block: 'start'})
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  scrollService = inject(ScrollService);

  skills: CardDetails[] = [
    {
      id: "typescript",
      type: "icon",
      icon: "devicon-typescript-plain",
      content: "Typescript"
    },
    {
      id: "nestjs",
      type: "icon",
      icon: "devicon-nestjs-plain",
      content: "NestJS"
    },
    {
      id: "vuejs",
      type: "icon",
      icon: "devicon-vuejs-plain",
      content: "VueJS"
    },
    {
      id: "nuxtjs",
      type: "icon",
      icon: "devicon-nuxtjs-plain",
      content: "NuxtJS"
    },
    {
      id: "angular",
      type: "icon",
      icon: "devicon-angularjs-plain",
      content: "Angular 22"
    },
    {
      id: "java",
      type: "icon",
      icon: "devicon-java-plain",
      content: "Java"
    },
    {
      id: "github",
      type: "icon",
      icon: "devicon-github-plain",
      content: "GitHub"
    },
    {
      id: "docker",
      type: "icon",
      icon: "devicon-docker-plain",
      content: "Docker"
    },
    {
      id: "mysql",
      type: "icon",
      icon: "devicon-mysql-original",
      content: "MySQL"
    },
    {
      id: "webstorm",
      type: "icon",
      icon: "devicon-webstorm-plain",
      content: "WebStorm"
    },
    {
      id: "intellij",
      type: "icon",
      icon: "devicon-intellij-plain",
      content: "IntelliJ"
    },
    {
      id: "postman",
      type: "icon",
      icon: "devicon-postman-plain",
      content: "PostMan"
    }
  ]
}
