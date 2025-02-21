import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LibrosCatalogoComponent } from './pages/libros-catalogo/libros-catalogo.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'catalogo', component: LibrosCatalogoComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
