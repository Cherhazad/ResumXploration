import {Component, computed, inject, OnDestroy, OnInit} from '@angular/core';
import {LanguageService} from '../shared/services/language.service';
import {CardDetails} from '../shared/interfaces/card-details.interface';
import {Card} from 'primeng/card';
import {Tag} from 'primeng/tag';
import {Subscription} from 'rxjs';
import {ScrollService} from '../shared/services/scroll.service';

@Component({
  imports: [
    Card,
    Tag
  ],
  selector: 'app-experiences',
  styleUrl: './experiences.css',
  templateUrl: './experiences.html',
})
export class Experiences implements OnInit, OnDestroy {
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


  languageService = inject(LanguageService);
  scrollService = inject(ScrollService);

  experiences = computed(() => this.languageService.isEnglish() ? this.experiencesEng : this.experiencesFr)

  experiencesEng: CardDetails[] = [
    {
      id: "dev",
      header: "Full Stack Web Dev",
      subHeader: "South Watts - September 2024 to November 2025",
      content: "Web app for HR, contract creation and edition, articles library",
      type: "text",
      footerContent: ["Developement", "Full-Stack", "Work Study Program", "TypeScript"]
    },
    {
      id: "internships",
      header: "Plant Biology Research - Internships",
      subHeader: "IPSIM & PHIM - 2017 to 2023",
      content: "Biostatistic analysis on RStudio, model plant, bacteria and yeasts cultures",
      type: "text",
      footerContent: ["Reasearch", "Plant Biology", "Internship"]
    },
    {
      id: "bijouterie",
      header: "Jewelry Sales Associate",
      subHeader: "Histoire d'Or - July to September 2020 + extras",
      content: "Sales, consulting, ear piercing, Customer service, handling extra orders at two other locations during Black Friday and the Christmas season",
      type: "text",
      footerContent: ["Jewelry", "Summer Job", "Sales Consulting"]
    },
    {
      id: "coiffure",
      header: "Sales Consultant at a Wholesaler for Hairdressers",
      subHeader: "Bleu Libellule - July 2020",
      content: "Sales, consulting, stocking shelves, facing",
      type: "text",
      footerContent: ["Hair Products Wholesaler", "Summer Job", "Sales Consulting"]
    },
    {
      id: "danse",
      header: "Dance teacher",
      subHeader: "Sabor Danza - September 2018 to November 2019",
      content: "4h of instruction per week during the evening",
      type: "text",
      footerContent: ["Instruction", "Dance school"]
    },
    {
      id: "caisse",
      header: "cashier",
      subHeader: "Super U - September 2018 à January 2019",
      content: "Productivity (number of items per minute per customer), cash flow management, customer loyalty",
      type: "text",
      footerContent: ["Cashier", "Retail Industry"]
    },
    {
      id: "sandwicherie",
      header: "Sales associate and stocker",
      subHeader: "Brioche Dorée - June 2017 à August 2017",
      content: "Sales, preparing drinks and crepes, washing dishes, table service",
      type: "text",
      footerContent: ["Sandwich Shop", "Sales", "Preparation", "Fast Food"]
    },
    {
      id: "caisse2",
      header: "cashier",
      subHeader: "Carrefour Market - July 2016 à August 2016",
      content: "Productivity (number of items per minute per customer), cash flow management, customer loyalty",
      type: "text",
      footerContent: ["Cashier", "Retail Industry"]
    }
  ]

  experiencesFr: CardDetails[] = [
    {
      id: "dev",
      header: "Dev Web Full Stack",
      subHeader: "South Watts - Septembre 2024 à Novembre 2025",
      content: "Application web pour les RH, gestion de contract et génération, bibliothèque d'articles",
      type: "text",
      footerContent: ["Développement", "Full-Stack", "Alternance", "TypeScript"]
    },
    {
      id: "stages",
      header: "Stages de recherche en biologie des plantes",
      subHeader: "IPSIM & PHIM - 2017 à 2023",
      content: "Analyses biostatistiques sur RStudio, plante modèle, culture de bactéries et levures",
      type: "text",
      footerContent: ["Recherche", "Biologie des plantes", "Stages"]
    },
    {
      id: "bijouterie",
      header: "Conseillère vendeuse en bijouterie",
      subHeader: "Histoire d'Or - Juillet à Septembre 2020 + extras",
      content: "Vente, conseil, perçage d’oreilles, SAV, prises de commandes extras sur 2 autres sites en période de Black Friday et Noël",
      type: "text",
      footerContent: ["Bijouterie", "Job d'été", "Conseil", "Vente"]
    },
    {
      id: "coiffure",
      header: "Conseillère vendeuse chez un grossiste pour coiffeurs",
      subHeader: "Bleu Libellule - Juillet 2020",
      content: "Vente, conseil, mise en rayon, facing",
      type: "text",
      footerContent: ["Grossiste coiffure", "Job d'été", "Conseil", "Vente"]
    },
    {
      id: "danse",
      header: "Professeure de danse",
      subHeader: "Sabor Danza - Septembre 2018 à Novembre 2019",
      content: "Enseignement de 4h de cours par semaine le soir",
      type: "text",
      footerContent: ["Enseignement", "École de danse"]
    },
    {
      id: "caisse",
      header: "Hôtesse de caisse",
      subHeader: "Super U - Septembre 2018 à Janvier 2019",
      content: "Rentabilité (nombre d’articles/min/client), gestion des liquidités, fidélisation clientèle",
      type: "text",
      footerContent: ["Caissière", "Grande Distribution"]
    },
    {
      id: "sandwicherie",
      header: "Vendeuse préparatrice",
      subHeader: "Brioche Dorée - Juin 2017 à Août 2017",
      content: "Vente, préparation de boissons/crêpes, plonge, service à table",
      type: "text",
      footerContent: ["Sandwicherie", "Vente", "Préparation", "Restauration rapide"]
    },
    {
      id: "caisse2",
      header: "Hôtesse de caisse",
      subHeader: "Carrefour Market - Juillet 2016 à Août 2016",
      content: "Rentabilité (nombre d’articles/min/client), gestion des liquidités, fidélisation clientèle",
      type: "text",
      footerContent: ["Caissière", "Grande Distribution"]
    },
  ]
}
