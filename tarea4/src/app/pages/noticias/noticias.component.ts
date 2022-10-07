import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any  = [];
  cargando: boolean = false;

  zelda: string = 'http://google.com';
  search: string = '';
  lastSearch: string = '';
  current: any = {title:'Ejemplo'};

  qp: string = '';

  constructor(private noticiaService: NoticiaService, private router: Router, private activatedRoute: ActivatedRoute,) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.qp = queryParams['new'];
    });
    if(this.qp !== '' && this.qp !== undefined){
      this.search = this.qp;
      this.buscar();
    }
  }

  buscar(e?: any): void {

    this.cargando = true;
    this.noticiaService.getNoticias(this.search).subscribe({
      next: (response) => {
        this.lastSearch = this.search;
        this.noticias = response.articles;
        this.cargando = false;
      },
      error: (err: any) => {
        console.log('Ocurrio un error');
      }
    });
    sessionStorage.setItem("search", this.search);
    this.SetQueryParams();
  }

  SetQueryParams(){
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { new: this.search },
      queryParamsHandling: 'merge'
    });
  }

  selectNoticia(noticia: any) {
    this.current = noticia;
    this.noticiaService.setCurrentNoticia(noticia);
  }

  clearCurrent() {
    this.current = {};
  }

  actualizarFavoritos(favoritos: any){

  }
}