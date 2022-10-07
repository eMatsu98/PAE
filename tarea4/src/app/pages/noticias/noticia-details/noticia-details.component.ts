import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noticia-details',
  templateUrl: './noticia-details.component.html',
  styleUrls: ['./noticia-details.component.scss']
})
export class NoticiaDetailsComponent implements OnInit, OnChanges {

  @Input() noticia: any = {};
  @Output() onClear: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Llegaron cambios: ', changes);
  }

  clearNoticia() {
    sessionStorage.setItem("search", '');
    this.router.navigate([], {
      relativeTo: this.activatedRoute
    });
    this.onClear.emit();
  }
}
