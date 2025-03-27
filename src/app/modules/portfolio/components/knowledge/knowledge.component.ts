import { Component, signal } from '@angular/core';

//Interface
import { iKnowledge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
public arrayKnowledge = signal<iKnowledge[]>([
  {
    src:'assets/icons/knowledge/html5.svg',
    alt:'Ícone de conhecimento de HTML 5'
  },
  {
    src:'assets/icons/knowledge/css3.svg',
    alt:'Ícone de conhecimento de CSS 3'
  },
  {
    src:'assets/icons/knowledge/javascript.svg',
    alt:'Ícone de conhecimento de Javascript'
  },
  {
    src:'assets/icons/knowledge/angular.svg',
    alt:'Ícone de conhecimento de Angular'
  },
  {
    src:'assets/icons/knowledge/nodejs.svg',
    alt:'Ícone de conhecimento de Node'
  }
 ])
}
