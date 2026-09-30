import {Component} from '@angular/core';
import {Card} from 'primeng/card';
import {Avatar} from 'primeng/avatar';
import {NgClass} from '@angular/common';

@Component({
  imports: [
    Card,
    NgClass,
  ],
  selector: 'app-resume',
  styleUrl: './resume.css',
  templateUrl: './resume.html',
})
export class Resume {
  sections: { id: string, header: string, content: string, colSpan: number, rowSpan: number }[] = [
    {
      id: "experience",
      header: "Experiences",
      content: "As a junior, I have one year and two months of full time full-stack dev",
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "formation",
      header: "Formations",
      content: "I have a diploma of Applications Conception and Full-Stack Development but also a Master's degree in Plant biology",
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "information",
      header: "Information",
      content: "I live in Montpellier, I have my driver's license and a car, I can do hybrid work (remote & on site)",
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "hobbies",
      header: "Hobbies",
      content: "I love singing, making music on my computer, playing badminton and making content",
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "skills",
      header: "Skills",
      content: "Back (TypeScript, NestJS, Java, Spring Boot), Front (TypeScript: Nuxt.js, Vue.js, Angular)",
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "contractType",
      header: "Contract type",
      content: "I'm looking for a full time & long-term contract",
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "profil",
      header: "Chérhazad BOUSTANI",
      content: "I'm a junior Full Stack TypeScript Developer",
      colSpan: 2,
      rowSpan: 2
    }
  ]
}
