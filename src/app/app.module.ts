import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoritesPageComponent } from '@modules/favorites/pages/favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesPageComponent,
  ],
  imports: [ //TODO: Solo se importan a otros modulos
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
