import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BdatosService {

  constructor(private http: HttpClient) { }

  //Get
  getFeed() {
    return this.http.get("https://apps-mob-insta-default-rtdb.firebaseio.com/publicaciones.json")
  }

  getUsuario() {
    return this.http.get("https://apps-mob-insta-default-rtdb.firebaseio.com/usuario.json")
  }
}
