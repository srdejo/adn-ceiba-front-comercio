import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Comercio } from '@shared/modelo/comercio';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ComercioService {

  constructor(
    protected http: HttpService,
    private cookieService: CookieService
  ) { }

  public consultar() {
    return this.http.doGet<Comercio[]>(`${environment.endpoint}/comercios`, this.http.optsName('consultar comercios'));
  }

  public seleccionar(comercio: Comercio): void {
    this.cookieService.set('comercio', JSON.stringify(comercio));
  }

  public comercioSeleccionado(): Comercio {
    try {
      return JSON.parse(this.cookieService.get('comercio'));
    } catch (error) {
      throwError('No se ha seleccionado un comercio');
    }
  }
}
