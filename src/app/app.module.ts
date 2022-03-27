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
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PerfilComponent,
    PublicacionesComponent,
    EncabezadoComponent,
    PublicacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
