import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdatosService } from '../bdatos.service'

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicacionid = this.ruta.snapshot.params["id"]
  resultado: any = {"caption":"Publicacion","fotoUsuario":"","id":"","imagen":"","usuario":""}

  constructor(private ruta: ActivatedRoute, private bd: BdatosService) { }

  ngOnInit(): void {
    this.getPublicacion()
  }

  getPublicacion(): void {
    this.bd.getPublicacionDetalle(this.publicacionid).subscribe(res=> {
      //Obtiene foto de perfil, foto, y nombre de publicador
      this.resultado = res
      this.bd.getImagen(res.imagen).subscribe(img => {
        this.resultado.imagen = img
      })
      this.resultado.id = this.publicacionid
      this.bd.getUsuario(res.usuario).subscribe(publicador => {
        this.bd.getImagen(publicador.foto).subscribe( imge =>{
          this.resultado.fotoUsuario = imge
        })
        this.resultado.usuario = publicador.nombre
      })
    })
  }
}
