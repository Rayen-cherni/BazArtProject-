import { Component, OnInit } from '@angular/core';
import { Raterpas } from '../shared/raterpas';
import { RaterpasService } from '../services/raterpas.service';
import { Article } from '../shared/article';
import { ArticleService } from '../services/article.service';
import { MeilleuresVentesService } from '../services/meilleures-ventes.service';
import { SwiperOptions } from 'swiper';
import { wishList } from '../shared/wishList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  //selectedArticlesRasPas: Raterpas;
  Articles_rater_pas: Raterpas[];
  Middle: Article[];
  Meilleures: Raterpas[];
  moment: string;
  
  //for wishList 
  list: Raterpas[];
  
  constructor(private raterpasService : RaterpasService,
    private articleService: ArticleService,
    private meilleuresVenteService: MeilleuresVentesService) { 
    }

  ngOnInit(): void {
  

    this.raterpasService.getArticlesRaterPas()
    .subscribe(  (articleNeRaterPas) => this.Articles_rater_pas = articleNeRaterPas);
    

    this.articleService.getMiddle()
    .subscribe((Middle)=>this.Middle=Middle);

    this.meilleuresVenteService.getMeilleures()
    .subscribe((meilleuresVente)=>this.Meilleures=meilleuresVente);

    this.list = wishList;
    
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

  Ajouter(msg: Raterpas){
    console.log(msg);
    this.list.push(msg);
    
  }
   openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
}
