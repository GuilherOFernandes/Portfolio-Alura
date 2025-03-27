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
    }
  ])
}
