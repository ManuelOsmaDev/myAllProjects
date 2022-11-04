import { of } from 'rxjs';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartComponent } from './cart.component';
import { BookService } from '../../services/book.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from '../../models/book.model';

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

const bookServiceMock = {
  getBooks: () => of(listBook),
}

describe("Card component", () =>{
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service: BookService;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations:[
        CartComponent
      ],
      providers:[
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
    }).compileComponents();
  });

  beforeEach( () =>{
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(BookService);
    spyOn(service, 'getBooksFromCart').and.callFake(() => listBook);
  });

  // fit("deberia crear", () => {
  //   expect(component).toBeTruthy();
  // });

  it("deberia crear", inject([CartComponent], (tescomponent: CartComponent)=>{
    expect(tescomponent).toBeTruthy();
  }));


  it("getTotalPrice return amounts", () => {
    const totalPrice = component.getTotalPrice(listBook);
    expect(totalPrice).toBeGreaterThan(20);
    expect(totalPrice).not.toBe(0);
  });

  it("onInPutNumberChanges plus", () => {
    const action = 'plus';
    const book = {
      name: '',
      author: '',
      isbn: '',
      price: 12,
      amount:2
    }

    const spy1 = spyOn(service, 'updateAmountBook').and.callFake( () => null);
    const spy2 = spyOn(component, 'getTotalPrice').and.callFake( () => null);

    expect(book.amount).toBe(2);
    component.onInputNumberChange(action,book);
    expect(book.amount === 3).toBeTrue();
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  })
  it("onInPutNumberChanges minios", () => {
    const action = 'minus';
    const book = {
      name: '',
      author: '',
      isbn: '',
      price: 12,
      amount:3
      }

    expect(book.amount).toBe(3);


    const spy1 = spyOn(service, 'updateAmountBook').and.callFake( () => null);
    const spy2 = spyOn(component, 'getTotalPrice').and.callFake( () => null);
    component.onInputNumberChange(action,book);
    expect(book.amount).toBe(2);

    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  })

  it("onClearBooks trabaja correctamente", () => {
    const spy = spyOn(( component as any ),'_clearListCartBook').and.callThrough();
    const spy2 = spyOn(service, 'removeBooksFromCart').and.callFake(()=>null);
    component.listCartBook = listBook;
    component.onClearBooks();
    expect(component.listCartBook.length).toBe(0);
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  //probar metodo privado
  it("onClearBooks trabaja privado correctamente", () => {
    const spy = spyOn(( component as any ),'_clearListCartBook').and.callThrough();
    component.listCartBook = listBook;
    component["_clearListCartBook"]();
    component.onClearBooks();
    expect(spy).toHaveBeenCalled();
  })
});
