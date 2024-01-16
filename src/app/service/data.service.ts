import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Docente } from '../domain/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private pathAPI:string = "http://localhost:8080/docente/getall";

  constructor(private http: HttpClient ) { }

  DataTable(): Observable<any> {
    return this.http.get<any>(this.pathAPI);
  }
  DataMenu() {
    return [
      {
        label: 'Options',
        items: [
          {
            label: 'Buscar',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Insertar',
            icon: 'pi pi-times',
          }
        ]
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Informacion',
            icon: 'pi pi-external-link',
          },
          {
            label: 'Salir',
            icon: 'pi pi-upload',
          }
        ]
      }
    ]
  }
  getDataMenu() {
    return Promise.resolve(this.DataMenu());
  }
}
