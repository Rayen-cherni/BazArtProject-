import { Component, OnInit } from "@angular/core";
import { Raterpas } from "../shared/raterpas";
import { wishList } from "../shared/wishList";
import { AccessoiresService } from "../services/accessoires.service";
@Component({
  selector: "app-accessoires",
  templateUrl: "./accessoires.component.html",
  styleUrls: ["./accessoires.component.css"],
})
export class AccessoiresComponent implements OnInit {
  articleAccessoires: Raterpas[];
  moment: string;

  //for wishList
  list: Raterpas[];

  constructor(private accessoiresService: AccessoiresService) {}

  ngOnInit(): void {
    this.accessoiresService
      .getAccessoires()
      .subscribe((Accessoires) => (this.articleAccessoires = Accessoires));

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
