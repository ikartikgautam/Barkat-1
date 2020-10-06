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

  navIcon = 'menu'

  openMbMenu() {
    var menu = document.getElementById("menu")
    menu.classList.toggle("open-menu");
    document.getElementById("button").classList.toggle("rotateBtn")
    // document.getElementById("button").style.transform = 'rotate(45deg)'
    if (menu.classList.contains('open-menu')) {
      this.navIcon = 'close';
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'unset'
      this.navIcon = 'menu';
    }

  }

}
