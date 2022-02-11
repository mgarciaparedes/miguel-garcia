import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

//Para que funcionen las funciones del formulario
import { FormsModule } from '@angular/forms';

//Para que funcione las peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { FirstSectionComponent } from './components/body/first-section/first-section.component';
import { SecondSectionComponent } from './components/body/second-section/second-section.component';
import { ThirdSectionComponent } from './components/body/third-section/third-section.component';
import { FourthSectionComponent } from './components/body/fourth-section/fourth-section.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BodyComponent, FirstSectionComponent, SecondSectionComponent, ThirdSectionComponent, FourthSectionComponent, GetInTouchComponent, ProjectsComponent, Error404Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
