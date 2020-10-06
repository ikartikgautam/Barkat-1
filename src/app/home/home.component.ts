import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, public dialog: MatDialog)  { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  homeHeader = true;

  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    if (event.path[1]['scrollY'] > (window.innerHeight - 20)) {
      this.homeHeader = false;
    }
    else {
      this.homeHeader = true;
    }
  }


  rotate(i){


    document.getElementById(i).classList.toggle('cardy-main-rotate')
    document.querySelector(i).classList.toggle("cardy-front-hide")
  }


    /* ===================================== */
    customOptions: OwlOptions = {
      margin: 24,
      autoplay:true,
      autoplayHoverPause:true,
      autoplaySpeed:200,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: ['<', '>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        }
      },
      nav: true
    }
  
    images = [
      { image: "url(../../assets/associates/img1.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img2.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img3.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img4.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img5.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img6.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img7.jpg)", title: 'Test Title', color: 'white' },
      { image: "url(../../assets/associates/img8.jpg)", title: 'Test Title', color: 'white' },
    ]
  
    openImage(img) {
      const dRef = this.dialog.open(ImageViewerComponent, { data: img,width:'max-content',height:'max-content' })
    }

    mentorImages = [
      {image:"url(../../assets/founders/IMG-20200923-WA00477.jpg)", name: 'Surjeet Kaur', position:'Co-ordinator', fb: '', insta: '', },
      {image:"url(../../assets/founders/IMG-20200923-WA00456.jpg)", name: 'Pushmeet Kaur', position:'Co-founder', fb: '', insta: '', },
      {image:"url(../../assets/founders/IMG-20200923-WA0046.jpg)", name: 'Simranjeet Singh', position:'International Ambassador', fb: '', insta: '', },
      {image:"url(../../assets/founders/IMG-20200728-WA0036.jpg)", name: 'Randeep Singh Kohli', position:'Founder', fb: 'https://www.facebook.com/randeepskohli/', insta: 'https://instagram.com/kohlirandeep?igshid=1pds2axsi66rk', twit: '', link: 'http://linkedin.com/in/randeep-s-kohli-92104553', thought: ''},
      {image:"url(../../assets/founders/IMG-20200209-WA0036-022.jpeg)", name: 'Simarpreet Singh Sethi', position:'Vice President', fb: 'https://www.facebook.com/simarpreetsingh.sethi.5', insta: 'https://instagram.com/simar713?igshid=169mf4941ku33', twit: '', link: 'https://www.linkedin.com/in/simarpreet-singh-sethi-5098711a9', thought: ''}
    ]


    play(){
      
    }

}
