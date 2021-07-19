import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ToastService } from '@shared/service/toast.service';
import { environment } from '../../../environments/environment';
import { HTTP_ERRORES_CODIGO } from './http-codigo-error';

@Injectable()
export class ManejadorError implements ErrorHandler {

  constructor(private toastService: ToastService) { }

  handleError(error: string | Error): void {
    const mensajeError = this.mensajePorDefecto(error);
    this.imprimirErrorConsola(mensajeError);
    this.mostrarErrorToast(mensajeError);
  }

  private mensajePorDefecto(error) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return HTTP_ERRORES_CODIGO.NO_HAY_INTERNET;
      }
      if (error.hasOwnProperty('status') && !error.error.hasOwnProperty('mensaje')) {
        return this.obtenerErrorHttpCode(error.status);
      }
    }
    return error;
  }

  private imprimirErrorConsola(mensaje): void {
    const respuesta = {
      fecha: new Date().toLocaleString(),
      path: window.location.href,
      mensaje,
    };
    if (!environment.production) {
      window.console.error('Error inesperado:\n', respuesta);
    }
  }

  private mostrarErrorToast(mensaje): void {
    if (typeof (mensaje) == "string") {
      this.toastService.show(mensaje, { classname: 'bg-danger text-light', delay: 5000 });
    } else {

      console.log(HTTP_ERRORES_CODIGO.PETICION_FALLIDA)
      this.toastService.show(HTTP_ERRORES_CODIGO.PETICION_FALLIDA, { classname: 'bg-danger text-light', delay: 5000 });
    }
  }

  public obtenerErrorHttpCode(httpCode: number): string {
    if (HTTP_ERRORES_CODIGO.hasOwnProperty(httpCode)) {
      return HTTP_ERRORES_CODIGO.PETICION_FALLIDA;
    }
    return HTTP_ERRORES_CODIGO[httpCode];
  }
}
