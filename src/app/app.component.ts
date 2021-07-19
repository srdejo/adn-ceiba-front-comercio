import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-base';
  public menuItems: MenuItem[] = [
    { url: '/home', nombre: 'Inicio' },
    { url: '/pedido', nombre: 'Pedidos' },
    { url: '/producto', nombre: 'Productos' },
    { url: '/comercio', nombre: 'Comercios' },
    { url: '/horario', nombre: 'Horarios' },
    { url: '/oferta', nombre: 'Ofertas' }
  ];
}
