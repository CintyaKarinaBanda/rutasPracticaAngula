import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})

export class CarritoComponent {
  carrito = [
    { id: 1, titulo: 'El Principito', precio: 200, cantidad: 1, imagen: 'https://covers.openlibrary.org/b/id/103682-M.jpg' },
    { id: 2, titulo: 'Ecology', precio: 259, cantidad: 1, imagen: 'https://covers.openlibrary.org/b/id/203510-M.jpg' },
    { id: 3, titulo: 'Discurso de Inequidad', precio: 167, cantidad: 2, imagen: 'https://covers.openlibrary.org/b/id/103982-M.jpg' }
  ];

  get subtotal(): number {
    return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  get iva(): number {
    return this.subtotal * 0.16;
  }

  get total(): number {
    return this.subtotal + this.iva;
  }

  eliminarLibro(id: number): void {
    this.carrito = this.carrito.filter(libro => libro.id !== id);
  }  

  procesarCompra(): void {
    alert('Compra realizada con éxito');
  }
}
