import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {
  isVisible:boolean = false;

  abrir(){
    this.isVisible = !this.isVisible;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
