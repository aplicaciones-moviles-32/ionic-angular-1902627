import { Component, OnInit } from '@angular/core';
import { publicacion } from '../interfaces';
import { BdatosService } from '../bdatos.service';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


@Component({
  selector: 'app-nueva-publicacion-form',
  templateUrl: './nueva-publicacion-form.component.html',
  styleUrls: ['./nueva-publicacion-form.component.css']
})
export class NuevaPublicacionFormComponent implements OnInit {

  constructor(private db: BdatosService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  pub: publicacion = {
    'caption': "",
    'imagen': "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
    'usuario': "test"
  }

  Imagen: File|null = null
  nombreImagen: string = ""

  public Imagencap: Photo|null = null;
  
  /*Métodos capacitor*/
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 50,
      width: 200
    });
    this.Imagencap = capturedPhoto;
    console.log(this.Imagencap.webPath);
  }

  getImgContent() {
    return this.sanitizer.bypassSecurityTrustUrl(this.Imagencap!.webPath!);
  }

  /*Método subir */
  onSubmit(datos: NgForm) {
    if (this.Imagencap) {
      this.db.postPublicacion(this.pub, this.Imagencap.webPath!)
    }
  }

  /*Métodos viejos*/
  cambioArchivo(event: any) {
    this.Imagen = event.target.files[0]
    if (this.Imagen) {
      this.nombreImagen = this.Imagen.name
    }
  }
}
