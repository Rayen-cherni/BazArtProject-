import { Component } from '@angular/core';

// Scroll Animation
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'bazArt2';

  ngOnInit() {
    AOS.init();
    
  }
}
