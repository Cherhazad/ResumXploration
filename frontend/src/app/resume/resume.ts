import {Component} from '@angular/core';
import {Card} from 'primeng/card';

@Component({
  imports: [
    Card
  ],
  selector: 'app-resume',
  styleUrl: './resume.css',
  templateUrl: './resume.html',
})
export class Resume {
  sections: { header: string, content: string }[] = [
    {
      header: "Experiences",
      content: "As a junior, I have one year and two months of full time full-stack dev"
    },
    {
      header: "Formations",
      content: "I have a diploma of Applications Conception and Full-Stack Development but also a Master's degree in Plant biology"
    },
    {
      header: "Information",
      content: "I live in Montpellier, I have my driver's license and a car, I can do hybrid work (remote & on site)"

    },
    {
      header: "Hobbies",
      content: "I love singing, making music on my computer, playing badminton and making content"
    },
    {
      header: "Skills",
      content: "Back (TypeScript, NestJS, Java, Spring Boot), Front (TypeScript: Nuxt.js, Vue.js, Angular)"
    },
    {
      header: "Contract type",
      content: "I'm looking for a full time & long-term contract",
    }
  ]
}
