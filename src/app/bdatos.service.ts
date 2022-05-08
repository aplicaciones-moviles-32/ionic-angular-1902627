import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publicacion, respuestaPost, usuario, RefsPublicaciones } from './interfaces'
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import {v4 as uuidv4} from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class BdatosService {
  usuario_act: string = "0"
  constructor(private http: HttpClient, private store: AngularFireStorage) {}

  uuid = uuidv4

  //Get
  getFeed() {
    return this.http.get<RefsPublicaciones>("https://apps-mob-insta-default-rtdb.firebaseio.com/publicaciones.json")
  }

  getUsuario(id_user: string) {
    return this.http.get<usuario>("https://apps-mob-insta-default-rtdb.firebaseio.com/usuario/" + id_user + ".json")
  }

  getPublicacionDetalle(id: string) {
    return this.http.get<publicacion>("https://apps-mob-insta-default-rtdb.firebaseio.com/TodasPublicaciones/"+ id + ".json")
  }

  getImagen(url: string) {
    var ref = this.store.ref(url)
    return ref.getDownloadURL()
  }

  //POST
  postPublicacion(post:publicacion, foto: Blob) {
    var recortada: publicacion = {'caption': post.caption, 'imagen': post.imagen, 'usuario': this.usuario_act}

    //Subir foto
    var path: string = 'publicaciones/' + this.uuid()//id unico
    this.store.upload(path,foto)
    //Guarda url de foto en recortada (elemento a subir)
    recortada.imagen = path

    //Lo agrega a publicaciones
    var respPost = this.http.post<respuestaPost>('https://apps-mob-insta-default-rtdb.firebaseio.com/TodasPublicaciones.json', recortada)

    respPost.subscribe(res=> {
        //Lo agrega al perfil
        this.http.post('https://apps-mob-insta-default-rtdb.firebaseio.com/usuario/' + this.usuario_act + '/publicaciones.json', JSON.stringify(res.name)).subscribe()
      })
  }

  //DELETE
  eliminaPublicacion(idpub: string) {
    if(idpub.length > 0) {
      //Primero obtiene direccion de la foto
      var foto: AngularFireStorageReference
      this.getPublicacionDetalle(idpub).subscribe(res=>{
        //Elimina foto
        this.store.ref(res.imagen).delete().subscribe()
      })
      //Elimina publicacion
      this.http.delete('https://apps-mob-insta-default-rtdb.firebaseio.com/TodasPublicaciones/'+ idpub + '.json').subscribe()
    }
  }

  //PUT
  updatePublicacion(idpub: string, pub: publicacion) {
    this.http.put('https://apps-mob-insta-default-rtdb.firebaseio.com/TodasPublicaciones/'+ idpub + '/caption.json', JSON.stringify(pub.caption)).subscribe(res =>{
    })
  }
}