import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { Comercio } from '@shared/modelo/comercio';
import { ComercioService } from '@shared/service/comercio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {

  public listaComercios: Observable<Comercio[]>;
  public comercioSeleccionado: string;

  @Input()
  items: MenuItem[];

  constructor(protected comercioService: ComercioService) { }

  ngOnInit() {
    this.comercioSeleccionado = 'Seleccione un comercio';
    this.listaComercios = this.comercioService.consultar();
  }

  seleccionarComercio(comercio: Comercio): void {
    this.comercioService.seleccionar(comercio);
    this.comercioSeleccionado = comercio.nombre;
  }

}
