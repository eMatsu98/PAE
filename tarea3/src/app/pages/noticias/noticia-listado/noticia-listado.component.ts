import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticia-listado',
  templateUrl: './noticia-listado.component.html',
  styleUrls: ['./noticia-listado.component.scss']
})
export class NoticiaListadoComponent implements OnInit {

  constructor() { }

  @Input() lista: any = {};
  @Input() actual: any = {};
  @Output() nuevaNoticia: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {

  }

  cambiarNoticia(actual: any){
    this.nuevaNoticia.emit(actual); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Llegaron camios de lista: ', changes);
  }

}
