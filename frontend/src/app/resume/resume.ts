import {Component, computed, inject} from '@angular/core';
import {LanguageService} from '../shared/services/language.service';
import {CardDetails} from '../shared/interfaces/card-details.interface';
import {ScrollService} from '../shared/services/scroll.service';

type LangType = 'fr' | 'eng';

@Component({
  imports: [],
  selector: 'app-resume',
  styleUrl: './resume.css',
  templateUrl: './resume.html',
})

export class Resume {
  languageService = inject(LanguageService);
  scrollService = inject(ScrollService);

  sections = computed(() =>
    this.languageService.isEnglish()
      ? this.sectionsEng
      : this.sectionsFr
  );

  onCardClick(targetId: string): void {
    this.scrollService.scrollTo(targetId)
  }

  sectionsEng: CardDetails[] = [
    {
      id: "skills",
      header: "Skills",
      content: "Back (TypeScript, NestJS, Java, Spring Boot), Front (TypeScript: Nuxt.js, Vue.js, Angular)",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "formations",
      header: "Formations",
      content: "I have a degree in Full-Stack Web Application Design and Development and a master's degree in Plant Biology",
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
      content: "I love singing, making music on my computer, playing badminton, playing video games and making content",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "experiences",
      header: "Experiences",
      content: "I have one year and two months experience as a full time full-stack web dev </br></br> I also had a variety of experiences in sales and consulting, in retail, and as a dance instructor while I was in school",
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

  sectionsFr: CardDetails[] = [
    {
      id: "skills",
      header: "Compétences",
      content: "Back (TypeScript, NestJS, Java, Spring Boot), Front (TypeScript: Nuxt.js, Vue.js, Angular)",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "formations",
      header: "Formations",
      content: "J'ai un diplôme de Concepteur Développeur d'Applications Web Full Stack et un Master en Biologie des Plantes",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "information",
      header: "Informations",
      content: "Je vis à Montpellier, j'ai le permis B et suis véhiculée, je peux faire du travail hybride (télétravail & sur site)",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "hobbies",
      header: "Centres d'intérêts",
      content: "J'adore chanter, faire de la musique sur mon ordinateur, jouer au badminton, aux jeux vidéos et créer du contenu",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "experiences",
      header: "Expériences",
      content: "J'ai une expérience d'un an et deux mois en tant que Développeuse Web Full Stack à temps plein </br></br> J'ai également eu diverses expériences en vente et conseil, en grande distribution ou encore en tant que professeure de danse en parallèle de mes études",
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
      content: "Développeuse junior Full Stack TypeScript",
      type: 'text',
      headerSize: 'xl',
      colSpan: 2,
      rowSpan: 3
    },
    {
      id: "contractType",
      header: "Type de contrat",
      content: "Je cherche un contrat de type CDI & à temps plein",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: "language",
      header: "Langues",
      content: "Je parle français (langue maternelle), anglais (intermédiaire)",
      type: 'text',
      colSpan: 1,
      rowSpan: 1
    },
  ]
}
