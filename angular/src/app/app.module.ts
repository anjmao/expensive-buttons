import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatButtonModule } from '@angular/material';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ClrButtonModule } from '@clr/angular';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // MatButtonModule,
    // NgbButtonsModule,
    ClrButtonModule,
    // NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
