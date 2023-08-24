import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomdDirective } from './customd.directive';
import { RngifDirective } from './rngif.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomdDirective,
    RngifDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
