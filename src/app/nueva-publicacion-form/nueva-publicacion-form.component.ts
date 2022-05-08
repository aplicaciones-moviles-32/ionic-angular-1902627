import { Component, OnInit } from '@angular/core';
import { publicacion } from '../interfaces';
import { BdatosService } from '../bdatos.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-nueva-publicacion-form',
  templateUrl: './nueva-publicacion-form.component.html',
  styleUrls: ['./nueva-publicacion-form.component.css']
})
export class NuevaPublicacionFormComponent implements OnInit {

  constructor(private db: BdatosService, ) { }

  ngOnInit(): void {
  }
  
  pub: publicacion = {
    'caption': "",
    'imagen': "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
    'usuario': "test"
  }

  Imagen: File|null = null
  nombreImagen: string = ""

  onSubmit(datos: NgForm) {
    this.db.postPublicacion(this.pub, this.Imagen!)
  }


  cambioArchivo(event: any) {
    this.Imagen = event.target.files[0]
    if (this.Imagen) {
      this.nombreImagen = this.Imagen.name
    }
  }
}
