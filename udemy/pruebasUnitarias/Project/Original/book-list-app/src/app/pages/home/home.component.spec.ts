import { HomeComponent } from './home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/models/book.model';
import { of } from 'rxjs';
const bookServiceMock = {
  getBooks: () => of(listBook),
}
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

describe("homeComponent", ()=>{
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[
        HomeComponent
      ],
      imports:[
        HttpClientTestingModule
      ],
      providers: [
         BookService
        // {
        //   provide: BookService,
        //   useValue: bookServiceMock
        // }
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
  });

  beforeEach(() => {
    let fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //al principio del todo se ejecuta y nada mas
  beforeAll( () => {

  })

  //salta despues de cada test

  beforeEach(()=>{

  })


  //salta despues de haber terminado todos los test
  afterAll(() => {
    
  })



  it("deberia crear", () =>{
    expect(component).toBeTruthy();
  });

  it("getBooks desde un Observable", () => {
  //   const bookService = fixture.debugElement.injector.get(BookService)
  //   const books: Book[] = [];
  //  const spy = spyOn(bookService, 'getBooks').and.returnValue(of(books));

  //   expect(spy).toHaveBeenCalled();
  //   expect(component.listBook.length).toBe(0);
  });

});
