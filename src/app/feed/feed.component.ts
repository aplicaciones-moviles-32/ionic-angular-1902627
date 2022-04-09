import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdatosService } from '../bdatos.service';
import { DictPublicaciones, pubCompleta } from '../interfaces';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private http: HttpClient, private db: BdatosService) { }

  ngOnInit(): void {
    this.db.getFeed().subscribe(res => {
      //Por cada publicacion
      for(let id in res) {
        //Obtiene la publicacion y la pone en publicaciones
        this.db.getPublicacionDetalle(res[id]).subscribe(pub=> {
          if(pub != null) {
            var nuevapub: pubCompleta = {"caption": pub.caption, "fotoUsuario": "", "imagen": pub.imagen,   "usuario": pub.usuario, "id": res[id]}
            //Obtiene foto de perfil y nombre de publicador
            this.db.getUsuario(pub.usuario).subscribe(publicador => {
              nuevapub.fotoUsuario = publicador.foto
              nuevapub.usuario = publicador.nombre
            })
            this.publicaciones[res[id]] = nuevapub
          }
        })
      }
    })
  }

  publicaciones: DictPublicaciones =  {}
}
