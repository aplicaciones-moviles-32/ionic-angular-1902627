import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdatosService, Publidetalle} from '../bdatos.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  publicacionid = this.ruta.snapshot.params["id"]

      publicaciones = [
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "adr3q212",
        "imagen":"/assets/imagenes/jose.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "65423",
        "imagen":"/assets/imagenes/jesus.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "34f4f",
        "imagen":"/assets/imagenes/morgan.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "45f43d",
        "imagen":"/assets/imagenes/raul.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "23432ff4",
        "imagen":"/assets/imagenes/shutter.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "ghjtr435",
        "imagen":"/assets/imagenes/steve.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "mnmvgdfr3",
        "imagen":"/assets/imagenes/carrusel.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "2343fddfgr",
        "imagen":"/assets/imagenes/bambi1.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "hfghf5654",
        "imagen":"/assets/imagenes/bambi2.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "gfgd545",
        "imagen":"/assets/imagenes/bambi3.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "gdegd3432",
        "imagen":"/assets/imagenes/bambi4.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "Ruffles",
        "fotoUsuario": "/assets/imagenes/Ruffles.png",
        "id": "gfhf4345",
        "imagen":"/assets/imagenes/bambi5.png",
        "caption": "Esta es una foto"
      },
      {
        "usuario": "@PerroLoco",
        "fotoUsuario": "/assets/imagenes/perro1.jpg",
        "id": "uiasdbiwa",
        "imagen": "/assets/imagenes/perro1.jpg",
        "caption": "Hola a todos"
      },
      {
        "usuario": "@Jose",
        "fotoUsuario": "/assets/imagenes/perro2.jpg",
        "id": "uhiadwb324",
        "imagen": "/assets/imagenes/perro2.jpg",
        "caption": "Bonito día"
      },
      {
        "usuario": "@Manuel",
        "fotoUsuario": "/assets/imagenes/perro1.jpg",
        "id": "ioefwbnoasd",
        "imagen": "/assets/imagenes/perro1.jpg",
        "caption": "Otra foto"
      }
  ]

  obtenerPublicacion(id:string) {
    var publicacion: any = {}
    for(let x = 0; x<this.publicaciones.length; x++) {
      if( id == this.publicaciones[x].id) {
        publicacion = this.publicaciones[x]
      }
    }
    return publicacion
  }

  resultado = this.obtenerPublicacion(this.publicacionid)
  
  
  ngOnInit(): void {
  }

}
