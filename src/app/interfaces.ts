export interface publicacion {
  "caption": string,
  "imagen": string;
  "usuario": string
}

export interface pubCompleta extends publicacion {
  id: string;
  "fotoUsuario": string
}

export interface respuestaPost {
  "name": string
}

export interface usuario {
  "Followers": number;
  "Following": number;
  "Posts": number;
  "descripcion": string;
  "foto": string;
  "nombre": string;
  "publicaciones": {
    [key:string]: string
  }
}

export interface DictPublicaciones {
  [key:string]: pubCompleta
}

export interface RefsPublicaciones {
  [key:string]: string
}