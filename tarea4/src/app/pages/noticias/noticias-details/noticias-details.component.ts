import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticias-details',
  templateUrl: './noticias-details.component.html',
  styleUrls: ['./noticias-details.component.scss']
})
export class NoticiasDetailsComponent implements OnInit {

  @Input() noticia: any = {};
  onClear: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Llegaron cambios: ', changes)
  }

  clearNoticia(){
    this.noticia = {}
    this,this.onClear.emit();
  }

}
