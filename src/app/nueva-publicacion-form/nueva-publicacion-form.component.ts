import { Component, OnInit } from '@angular/core';
import { publicacion } from '../interfaces';
import { BdatosService } from '../bdatos.service';

@Component({
  selector: 'app-nueva-publicacion-form',
  templateUrl: './nueva-publicacion-form.component.html',
  styleUrls: ['./nueva-publicacion-form.component.css']
})
export class NuevaPublicacionFormComponent implements OnInit {

  constructor(private db: BdatosService) { }

  ngOnInit(): void {
  }
  
  publicacionNueva: publicacion = {
    'caption': "",
    'imagen': "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
    'usuario': "test"
  }

  publicar() {
    this.db.postPublicacion(this.publicacionNueva)
  }

}
