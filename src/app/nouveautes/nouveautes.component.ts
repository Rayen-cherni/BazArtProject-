import { Component, OnInit } from '@angular/core';
import { RaterpasService } from '../services/raterpas.service';
import { Raterpas } from '../shared/raterpas';
import { wishList } from '../shared/wishList';


@Component({
  selector: 'app-nouveautes',
  templateUrl: './nouveautes.component.html',
  styleUrls: ['./nouveautes.component.css']
})
export class NouveautesComponent implements OnInit {

  articleNouveaute: Raterpas[];
  moment: string;

    //for wishList 
    list: Raterpas[];

  constructor(private raterpasService : RaterpasService) { }

  ngOnInit(): void {

    this.raterpasService.getArticlesRaterPas()
    .subscribe(  (articleNeRaterPas) => this.articleNouveaute = articleNeRaterPas);
   
   
   
    this.list = wishList;
  }

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
