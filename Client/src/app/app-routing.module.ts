import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {WebCamComponent} from './webcam/webcam.component'

export const routes: Routes = [
  //{ path: 'webcam', component: WebCamComponent },
   { path: '', redirectTo: '/webcam', pathMatch: 'full'},
  { path: 'streaming',  loadChildren: 'app/streaming/streaming.module#StreamingModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(
      routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
