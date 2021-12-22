import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [ //aqui van todos los modulos
        CommonModule //Este modulo nos permite usar las directivas como *ngFor *ngIf etc...
    ]
})
export class HeroesModule{};