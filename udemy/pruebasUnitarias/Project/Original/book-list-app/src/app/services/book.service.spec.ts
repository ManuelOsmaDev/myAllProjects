import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Book } from '../models/book.model';
import { BookService } from './book.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { environment } from 'src/environments/environment.prod';
const listBook: Book[] = [
  {
  name: '',
  author: '',
  isbn: '',
  price: 12,
  amount:2
  },
  {
    name: '',
    author: '',
    isbn: '',
    price: 17,
    amount:6
    },
    {
      name: '',
      author: '',
      isbn: '',
      price: 87,
      amount:9
      }
];

describe('BookService', () => {
  let service: BookService;
  let storage = {};
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]


    });

  });

  beforeEach( () =>{
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController)

    spyOn(localStorage, 'getItem').and.callFake((key:string) => {
      return storage[key] ? storage[key] : null;
    })
  })

  afterAll( () => {
    httpMock.verify();
  });

  it("comprabar que el servicio se ha creado corrrectamente", () => {
    expect(service).toBeTruthy();
  });

  fit("comprobar que getBooks devuelva lista de libros y cadenas sea metodo get", () => {
    service.getBooks().subscribe((resp:Book[])=>{
      expect(resp).toEqual(listBook)
    })

    const req = httpMock.expectOne(environment.API_REST_URL + `/book`);
    expect(req.request.method).toBe('GET');
    req.flush(listBook);
  });


  fit("devuelve array vacio cuando el storage esta vacio", ()=>{
    const listBook = service.getBooksFromCart();
    expect(listBook.length).toBe(0);
  });


});
