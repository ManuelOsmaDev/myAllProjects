import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss'],
})
export class ListEmpleadosComponent implements OnInit {
  empleados: any[] = [];

  constructor(
    private _empleadoService: EmpleadoService,
    private toastr: ToastrService,

  ) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe((data) => {
      this.empleados = [];
      data.forEach((element: any) => {
        // console.log(element.payload.doc.data());
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
      console.log(this.empleados);
    });
  }

  deleteEmpleado(id: string) {
    this._empleadoService
      .deleteEmpleado(id)
      .then(() => {
        this.toastr.error('Se ha elimiado el empleado', 'Exito', {
          positionClass: 'toast-center-center',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
