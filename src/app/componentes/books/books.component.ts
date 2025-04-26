import { Component } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book : Book = {} as Book;

  isUpdate : boolean = false;

  idCount : number = 5;

  books: Book[] = [ 
    {
      id: 1,
      title: "Java 24 horas",
      author: "Cláudio Ferreira",
      price: 40.50
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "João Santos",
      price: 36.50
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Amaral Ferreira",
      price: 43.25
    },
    {
      id: 4,
      title: "JavaScript 24 horas",
      author: "Lucia Amaral",
      price: 28.5
    }
  ];

  saveBook(){

    if(!this.isUpdate){
    this.book.id = this.idCount;
    this.idCount++;
    this.books.push(this.book);
    }

    this.book = {} as Book;
    this.isUpdate = false;
  }

  update(selectedBook:Book){
    this.book = selectedBook;
    this.isUpdate = true;
  }

  remove(removeBook:Book){
    this.books = this.books.filter( b => b!== removeBook);
  }
}
