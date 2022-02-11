import { ModuleWithProviders } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

//Importar componentes a redireccionar
import { BodyComponent } from './components/body/body.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { Error404Component } from './components/error404/error404.component';

//Array de rutas
const appRoutes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'home', component: BodyComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'get-in-touch', component: GetInTouchComponent },
  { path: '**', component: Error404Component },
];

//Exportar el módulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
