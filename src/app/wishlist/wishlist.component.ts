import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { MeilleuresVentesService } from '../services/meilleures-ventes.service';
import { Raterpas } from '../shared/raterpas';
import { wishList } from '../shared/wishList';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  moment : string;
  Meilleures: Raterpas[];
  list: Raterpas[];



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

  constructor(private meilleuresVenteService: MeilleuresVentesService) { }

  ngOnInit(): void {
    this.meilleuresVenteService.getMeilleures()
    .subscribe((meilleuresVente)=>this.Meilleures=meilleuresVente);

    this.list=wishList;

  }

  Suprrimer(y: string){
   
   var aux = this.list.filter((v)=>{
    return  v.ref == y;
   })

   console.log(aux.length);
   aux.pop();
   console.log(aux.length);
    
  }

}
