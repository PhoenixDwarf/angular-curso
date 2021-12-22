import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[]=[
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América'
  ];

  heroeBorrado:string = '';


  public borrarHeroe():void{
    this.heroeBorrado = this.heroes.pop() || ''; //retorna un string o en caso de ser undefined retorna un string vacio
  }

}
