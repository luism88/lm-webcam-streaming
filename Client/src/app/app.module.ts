import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { WebcamModule } from './webcam/webcam.module';
import { StreamingModule } from './streaming/streaming.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    WebcamModule,
    StreamingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
