import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../book';   //O .. serve para voltar pasta
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  @Input()
  book : Book = {} as Book;

  @Output()
  saveEmitter = new EventEmitter();

  save(){
    this.saveEmitter.emit();
  }

  
}
