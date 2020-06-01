import { Component, OnInit, ViewChild, ElementRef, Input, HostListener, AfterViewInit,  } from '@angular/core';
import { Raterpas } from '../shared/raterpas';
import { RaterpasService } from '../services/raterpas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedArticlesRasPas: Raterpas;
  Articles_rater_pas: Raterpas[];
  


  constructor(private raterpasService : RaterpasService) { }

  ngOnInit(): void {
    this.raterpasService.getArticlesRaterPas()
    .subscribe( (articleNeRaterPas) => this.Articles_rater_pas = articleNeRaterPas);

  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   console.log("hello")
  //  }

   
  // @HostListener('mouseleave') onMouseLeave() {
  //   console.log("hBye")  
  // }

}
