import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { FeedComponent } from './feed/feed.component';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionBaseComponent } from './publicacion-base/publicacion-base.component';
import { PopoverComponent } from './popover/popover.component';
import { HistoriasComponent } from './historias/historias.component';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { PopoverPerfilComponent } from './popover-perfil/popover-perfil.component';
import { NuevaPublicacionFormComponent } from './nueva-publicacion-form/nueva-publicacion-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'

export const firebaseConfig = {
  apiKey: "AIzaSyCaZcnNEidWVGMpA0REXHaq6Kji9ZpQPwo",
  authDomain: "apps-mob-insta.firebaseapp.com",
  databaseURL: "https://apps-mob-insta-default-rtdb.firebaseio.com",
  projectId: "apps-mob-insta",
  storageBucket: "apps-mob-insta.appspot.com",
  messagingSenderId: "213366764876",
  appId: "1:213366764876:web:9f2827c49d9faaf6864be9"
};

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PerfilComponent,
    PublicacionesComponent,
    EncabezadoComponent,
    PublicacionComponent,
    PublicacionBaseComponent,
    PopoverPerfilComponent,
    PopoverComponent,
    HistoriasComponent,
    NuevaPublicacionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
