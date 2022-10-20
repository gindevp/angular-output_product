import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from "@angular/forms";
import { HighlightDirective } from './highlight.directive';
import { ProduclistComponent } from './produclist/produclist.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProductComponent,
    HighlightDirective,
    ProduclistComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
