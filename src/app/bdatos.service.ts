import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from 'rxjs';

export interface Publidetalle {
    caption: string;
    fotoUsuario: string;
    id: string;
    imagen: string;
    usuario: string;
}


@Injectable({
  providedIn: 'root'
})
export class BdatosService {
  constructor(private http: HttpClient, private db: AngularFireDatabase) {
  }

  //Get
  getFeed() {
    //return this.http.get("https://apps-mob-insta-default-rtdb.firebaseio.com/publicaciones.json")
    return this.db.list("publicaciones").valueChanges()
  }

  getUsuario() {
    //return this.http.get("https://apps-mob-insta-default-rtdb.firebaseio.com/usuario.json")
    return this.db.object("usuario").valueChanges()
  }

  getPublicacionDetalle():Observable<any> {
    return this.db.list("TodasPublicaciones").valueChanges()
  }
}