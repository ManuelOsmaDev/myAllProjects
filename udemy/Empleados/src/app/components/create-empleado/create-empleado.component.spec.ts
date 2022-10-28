import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpleadoComponent } from './create-empleado.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmpleadoService } from '../../services/empleado.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';



describe('CreateEmpleadoComponent', () => {
  let component: CreateEmpleadoComponent;
  let fixture: ComponentFixture<CreateEmpleadoComponent>;
  let service: EmpleadoService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        RouterTestingModule

      ],
      declarations: [
        CreateEmpleadoComponent
      ],
      providers: [
        EmpleadoService,
        ToastrService,

      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach( () =>{
    fixture = TestBed.createComponent(CreateEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(EmpleadoService);
  });

  it("deberia crear", () => {
    expect(component).toBeTruthy();
  })

  // agregarEditarEmpleado() {
  //   this.submitted = true;
  //   Iif (this.createEmpleado.invalid) {
  //     return;
  //   }
  //   if(this.id === null){
  //     this.agregarEmpleado();
  //   }else{
  //     this.editarEmpleado(this.id)
  //   }



});
