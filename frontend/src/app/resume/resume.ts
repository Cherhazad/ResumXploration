import {Component} from '@angular/core';
import {Card} from 'primeng/card';
import {Avatar} from 'primeng/avatar';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {SafeValue} from '@angular/platform-browser';

type CardType = 'text' | 'icon' | 'image'

interface CardDetails {
  id: string
  header: string
  content?: string
  type: CardType
  colSpan?: number
  rowSpan?: number
  icon?: string
  image?: string | SafeValue
  headerSize?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'default' | 'primary' | 'success' | 'warning'
}

@Component({
  imports: [
    Card,
    NgClass,
    NgOptimizedImage,
  ],
  selector: 'app-resume',
  styleUrl: './resume.css',
  templateUrl: './resume.html',
})

export class Resume {
  sections: CardDetails[] = [
    {
      id: "skills",
      header: "Skills",
      content: "Back (TypeScript, NestJS, Java, Spring Boot), Front (TypeScript: Nuxt.js, Vue.js, Angular)",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "formation",
      header: "Formations",
      content: "I have a diploma of Applications Conception and Full-Stack Development but also a Master's degree in Plant biology",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "information",
      header: "Information",
      content: "I live in Montpellier, I have my driver's license and a car, I can do hybrid work (remote & on site)",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "hobbies",
      header: "Hobbies",
      content: "I love singing, making music on my computer, playing badminton and making content",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "experience",
      header: "Experiences",
      content: "As a junior, I have one year and two months of full time full-stack dev",
      type: 'text',
      colSpan: 1,
      rowSpan: 2
    },
    {
      id: "profilePicture",
      header: "",
      type: 'image',
      image: "/profilePicture.jpeg",
      colSpan: 1,
      rowSpan: 2
    },
    {
      id: "profile",
      header: "Chérhazad BOUSTANI",
      content: "I'm a junior Full Stack TypeScript Developer",
      type: 'text',
      headerSize: 'xl',
      colSpan: 2,
      rowSpan: 3
    },
    {
      id: "contractType",
      header: "Contract type",
      content: "I'm looking for a full time & long-term contract",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "language",
      header: "Languages",
      content: "I speak French (mother tongue), English (intermediate)",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
  ]
}
