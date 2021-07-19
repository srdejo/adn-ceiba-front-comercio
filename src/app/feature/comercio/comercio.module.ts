import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercioRoutingModule } from './comercio-routing.module';
import { ComercioComponent } from './components/comercio/comercio.component';
import { CrearComercioComponent } from './components/crear-comercio/crear-comercio.component';
import { ListarComercioComponent } from './components/listar-comercio/listar-comercio.component';


@NgModule({
  declarations: [
    ComercioComponent,
    CrearComercioComponent,
    ListarComercioComponent
  ],
  imports: [
    CommonModule,
    ComercioRoutingModule
  ]
})
export class ComercioModule { }
