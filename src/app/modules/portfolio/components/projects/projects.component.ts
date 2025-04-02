import { Component, signal } from '@angular/core';

//Interface
import { iProjects } from '../../interface/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<iProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt:"Projeto Vida FullStack",
      title:"Vida FullStack",
      width:'100px',
      height:'51px',
      description:'<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript. Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links:[
        {
          name:'Conheça o Blog',
          href:'https://vidafullstack.com.br',
        }
      ]
    },
    {
      src: 'assets/img/projects/coloramaa.png',
      alt:"Colorama",
      title:"Colorama",
      width:'140px',
      height:'51px',
      description:'<p>Projeto que realizei para a cadeira de Programação Orientada à Objetos</p>',
      links:[
        {
          name:'Conheça o Projeto',
          href:'https://github.com/GuilherOFernandes/Colorama/tree/main',
        }
      ]
    },
    {
      src: 'assets/img/projects/bikcraft.svg',
      alt:"Bikcraft",
      title:"Bikcraft",
      width:'150px',
      height:'51px',
      description:'<p>Projeto final do curso de HTML e CSS da Origamid</p>',
      links:[
        {
          name:'Conheça o Projeto',
          href:'https://guilherofernandes.github.io/bikcraft/',
        }
      ]
    },
    {
      src: 'assets/img/projects/animaisfantasticos.png',
      alt:"Animais Fantasticos",
      title:"Animais Fantasticos",
      width:'140px',
      height:'51px',
      description:'<p>Projeto principal que fiz sob o curso de JavaScript da Origamid</p>',
      links:[
        {
          name:'Conheça o Projeto',
          href:'https://guilherofernandes.github.io/AnimaisFantasticos/',
        }
      ]
    },
  ])
}
