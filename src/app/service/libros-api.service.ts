import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosApiService {

  constructor(private http:HttpClient) { }
  
    //Funcion que consume la api
    getPosts(){
      return this.http.get('https://openlibrary.org/people/mekBot/books/want-to-read.json')
    }
}
