import { Component, OnInit } from '@angular/core';
import { LibrosApiService } from '../../service/libros-api.service';

@Component({
  selector: 'app-libros-catalogo',
  imports: [],
  templateUrl: './libros-catalogo.component.html',
  styleUrl: './libros-catalogo.component.css'
})
export class LibrosCatalogoComponent implements OnInit {
  librosData: any[] = [];

  constructor(private librosService: LibrosApiService) {}


  ngOnInit(): void {
    //Consumir la api
    this.librosService.getPosts().subscribe({
      next: (data: any) => {
        if (data?.reading_log_entries) {
          this.librosData = data.reading_log_entries;
        } else {
          console.error('Formato de datos incorrecto:', data);
        }
      },
      error: (error) => console.error('Error al obtener los datos:', error)
    });    
  }
}
