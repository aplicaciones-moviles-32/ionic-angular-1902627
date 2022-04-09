import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publicacion, respuestaPost, usuario, RefsPublicaciones } from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class BdatosService {
  usuario_act: string = "0"
  constructor(private http: HttpClient) {
  }

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

  //POST
  postPublicacion(post:publicacion) {
    var recortada: publicacion = {'caption': post.caption, 'imagen': post.imagen, 'usuario': this.usuario_act}
    //Lo agrega a publicaciones
    this.http.post<respuestaPost>('https://apps-mob-insta-default-rtdb.firebaseio.com/TodasPublicaciones.json', recortada)
      .subscribe(res=> {
        //Lo agrega al perfil
        this.http.post('https://apps-mob-insta-default-rtdb.firebaseio.com/usuario/0/publicaciones.json', JSON.stringify(res.name)).subscribe()
      })
  }

  //DELETE
  eliminaPublicacion(idpub: string) {
    console.log(idpub)
    if(idpub.length > 0) {
      this.http.delete('https://apps-mob-insta-default-rtdb.firebaseio.com/TodasPublicaciones/'+ idpub + '.json').subscribe()
    }
  }

  //PUT
  updatePublicacion(idpub: string, pub: publicacion) {
    this.http.put('https://apps-mob-insta-default-rtdb.firebaseio.com/TodasPublicaciones/'+ idpub + '/caption.json', JSON.stringify(pub.caption)).subscribe(res =>{
    })
  }
}