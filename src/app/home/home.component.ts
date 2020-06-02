import { Component, OnInit, ViewChild, ElementRef, Input, HostListener, AfterViewInit,  } from '@angular/core';
import { Raterpas } from '../shared/raterpas';
import { RaterpasService } from '../services/raterpas.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AnimationComponent } from '../animation/animation.component';
import { Article } from '../shared/article';
import { ArticleService } from '../services/article.service';
import { MeilleuresVentesService } from '../services/meilleures-ventes.service';

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

  slides: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  

  constructor(private raterpasService : RaterpasService,
    private articleService: ArticleService,
    private meilleuresVenteService: MeilleuresVentesService) { }

  ngOnInit(): void {
    this.raterpasService.getArticlesRaterPas()
    .subscribe(  (articleNeRaterPas) => this.Articles_rater_pas = articleNeRaterPas);
    

    this.articleService.getMiddle()
    .subscribe((Middle)=>this.Middle=Middle );

    this.meilleuresVenteService.getMeilleures()
    .subscribe((meilleuresVente)=>this.Meilleures=meilleuresVente);
    this.slides = this.chunk(this.Meilleures, 4);
    
  }

  

koko(){
  console.log(this.Meilleures.length);
}

}
