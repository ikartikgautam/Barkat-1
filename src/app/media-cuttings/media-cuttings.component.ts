import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-cuttings',
  templateUrl: './media-cuttings.component.html',
  styleUrls: ['./media-cuttings.component.scss']
})
export class MediaCuttingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  media = [
    { image: '../../assets/gallery/News/881bc48a-fa30-42de-8fc6-380b0a38cf95.JPG', title: '' },
    { image: '../../assets/gallery/News/fc30b8e6-2283-4d14-ad9e-e336cb4bb16e.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6481.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6485.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6491.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6504.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6506.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6513.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6514.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6515.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6517.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6521.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6522.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6523.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6524.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6525.JPG', title: '' },
    { image: '../../assets/gallery/News/IMG-6526.JPG', title: '' },
    // { image: '../../assets/gallery/News/', title: '' },
  ]

}
