import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumnos.models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  public alumnos: Alumno[] = [
    new Alumno(
      1,
      'Lionel',
      'Messi',
      'lmessi@mail.com',
      true,
      new Date('1994-01-03'),
      'Node'
    ),
    new Alumno(
      2,
      'Kilian',
      'Mbape',
      'kmbape@mail.com',
      false,
      new Date('1994-01-03'),
      'Java'
    ),
  ];
  ngOnInit(): void {
    // Este es el ciclo de vida ON INIT (al inicializarse) del componente...
  }
}
