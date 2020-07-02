import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { RaterpasService } from '../services/raterpas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Raterpas } from '../shared/raterpas';
import { wishList } from '../shared/wishList';
import { SwiperOptions } from 'swiper';
import { MeilleuresVentesService } from '../services/meilleures-ventes.service';


@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {

  ArticleSelected: Raterpas;
  Articles_rater_pas: Raterpas[];
  Meilleures: Raterpas[];
  //MeilleureSelected: Raterpas;

  list: Raterpas[];
  moment: string;

  constructor(private raterpasService : RaterpasService,
    private meilleuresVenteService: MeilleuresVentesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // ArticleNeRaterPas methods
    this.raterpasService.getArticlesRaterPas()
    .subscribe(  (articleNeRaterPas) => this.Articles_rater_pas = articleNeRaterPas);
    // Selection with params
    this.route.params.pipe(switchMap((params: Params)=>{
      return this.raterpasService.getSelectedArticlesRaterPas(params['ref'])
    }))
    .subscribe((ArticleSelected)=>{this.ArticleSelected=ArticleSelected})

    // MeilleuresVnetes methods
    this.meilleuresVenteService.getMeilleures()
    .subscribe((meilleuresVente)=>this.Meilleures=meilleuresVente);
    //Selection with params
    this.route.params.pipe(switchMap((params: Params)=>{
      return this.meilleuresVenteService.getSelectedMeilleure(params['ref'])
    }))
    .subscribe((MeilleureSelected)=>{this.ArticleSelected=MeilleureSelected})

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
