import { Component, OnInit } from "@angular/core";
import { Raterpas } from "../shared/raterpas";
import { wishList } from "../shared/wishList";
import { ChaussuresService } from '../services/chaussures.service';

@Component({
  selector: 'app-chaussures',
  templateUrl: './chaussures.component.html',
  styleUrls: ['./chaussures.component.css']
})
export class ChaussuresComponent implements OnInit {
  articleChaussures: Raterpas[];
  moment: string;

  //for wishList
  list: Raterpas[];

  constructor(private chaussureService: ChaussuresService) {}

  ngOnInit(): void {
    this.chaussureService
      .getChaussures()
      .subscribe((Chaussures) => (this.articleChaussures = Chaussures));

    this.list = wishList;
  }

  Ajouter(msg: Raterpas) {
    console.log(msg);
    this.list.push(msg);
  }
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
