import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerAppear: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  homeHeader = false;

  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    if (event.path[1]['scrollY'] > (window.innerHeight - 70)) {
      this.homeHeader = true;
    }
    else {
      this.homeHeader = false;
    }
  }

}
