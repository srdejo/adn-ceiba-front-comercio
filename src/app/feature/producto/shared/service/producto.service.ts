import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Comercio } from '@shared/modelo/comercio';
import { ComercioService } from '@shared/service/comercio.service';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  private comercioSeleccionado: Comercio;

  constructor(protected http: HttpService, private comercioService: ComercioService) {
  }

  public consultar() {
    this.comercioSeleccionado = this.comercioService.comercioSeleccionado();
    if (this.comercioSeleccionado == null) {
      return throwError('Comercio no seleccionado');
    }
    return this.http.doGet<Producto[]>(`${environment.endpoint}/productos/${this.comercioSeleccionado.id}`, this.http.optsName('consultar productos'));
  }

  public guardar(producto: Producto) {
    console.log('producto', producto);

    return this.http.doPost<Producto, boolean>(`${environment.endpoint}/productos`, producto,
      this.http.optsName('crear/actualizar productos'));
  }

  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
      this.http.optsName('eliminar productos'));
  }
}
