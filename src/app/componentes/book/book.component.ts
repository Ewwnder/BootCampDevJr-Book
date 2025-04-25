import { Component, Input } from '@angular/core';
import { Book } from '../../book';   //O .. serve para voltar pasta

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  @Input()
  book : Book = {} as Book;

  

  
}
