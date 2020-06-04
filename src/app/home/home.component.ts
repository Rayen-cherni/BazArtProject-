import { Component, OnInit, ViewChild, ElementRef, Input, HostListener, AfterViewInit,  } from '@angular/core';
import { Raterpas } from '../shared/raterpas';
import { RaterpasService } from '../services/raterpas.service';
import { Article } from '../shared/article';
import { ArticleService } from '../services/article.service';
import { MeilleuresVentesService } from '../services/meilleures-ventes.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  selectedArticlesRasPas: Raterpas;
  Articles_rater_pas: Raterpas[];
  Middle: Article[];
  Meilleures: Raterpas[];
  moment: string;
  
  constructor(private raterpasService : RaterpasService,
    private articleService: ArticleService,
    private meilleuresVenteService: MeilleuresVentesService) { 
    }

  ngOnInit(): void {
  

    this.raterpasService.getArticlesRaterPas()
    .subscribe(  (articleNeRaterPas) => this.Articles_rater_pas = articleNeRaterPas);
    

    this.articleService.getMiddle()
    .subscribe((Middle)=>this.Middle=Middle );

    this.meilleuresVenteService.getMeilleures()
    .subscribe((meilleuresVente)=>this.Meilleures=meilleuresVente);

    
  }

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.carousel-control-next',
      prevEl: '.carousel-control-prev'
    },
    loop: true
  };

  Afficher(msg){
    console.log(msg);
  }

}
