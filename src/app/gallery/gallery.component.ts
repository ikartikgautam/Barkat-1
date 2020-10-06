import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  images = [
    { image: "url(../../assets/gallery/7b78fc01-d9ea-4b0a-a1b8-63b33049aa3a.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6480.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6482.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6483.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6484.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6486.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6487.JPG)", title: 'Test Title', color: 'white' },
    { image: "url(../../assets/gallery/IMG-6488.JPG)", title: 'Test Title', color: 'white' },
  ];

  openImage(img) {
    this.dialog.open(ImageViewerComponent, { data: img,panelClass:'imageViewer' });
  }

}
