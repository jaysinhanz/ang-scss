import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { SiteSelectorComponent } from './shared/site-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TopHeaderComponent } from './top-header/top-header.component'

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    SiteSelectorComponent,
    HomeComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
