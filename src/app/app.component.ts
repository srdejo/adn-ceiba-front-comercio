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
    { url: '/home', nombre: 'Inicio', submenu: null },
    { url: '/pedido', nombre: 'Pedidos', submenu: [{ url: '/pedido/listar', nombre: 'Ver pedidos' }] },
    { url: '/producto', nombre: 'Productos', submenu: [{ url: '/producto/listar', nombre: 'Ver productos' }, { url: '/producto/crear', nombre: 'Crear productos' }] },
    { url: '/comercio', nombre: 'Comercios', submenu: [{ url: '/comercio/listar', nombre: 'Ver comercios' }, { url: '/comercio/crear', nombre: 'Crear comercios' }] },
    { url: '/horario', nombre: 'Horarios', submenu: [{ url: '/horario/listar', nombre: 'Ver horarios' }, { url: '/horario/crear', nombre: 'Crear horarios' }] },
    { url: '/oferta', nombre: 'Ofertas', submenu: [{ url: '/oferta/listar', nombre: 'Ver ofertas' }, { url: '/oferta/crear', nombre: 'Crear ofertas' }] }
  ];
}
