import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  displayCustom: boolean = false;
  displayBasic2: boolean  = false;
  displayBasic: boolean  = true;

  activeIndex: number = 0;

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
}
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

images:any = [
  {
      "previewImageSrc": "assets/1.jpg",
      "thumbnailImageSrc": "assets/thumbnail.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
      "previewImageSrc": "assets/2.jpg",
      "thumbnailImageSrc": "assets/thumbnail.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  }, {
    "previewImageSrc": "assets/3.jpg",
    "thumbnailImageSrc": "assets/thumbnail.jpg",
    "alt": "Description for Image 1",
    "title": "Title 1"
}, {
  "previewImageSrc": "assets/4.jpg",
  "thumbnailImageSrc": "assets/thumbnail.jpg",
  "alt": "Description for Image 1",
  "title": "Title 1"
}, {
  "previewImageSrc": "assets/5.jpg",
  "thumbnailImageSrc": "assets/thumbnail.jpg",
  "alt": "Description for Image 1",
  "title": "Title 1"
}, {
  "previewImageSrc": "assets/6.jpg",
  "thumbnailImageSrc": "assets/thumbnail.jpg",
  "alt": "Description for Image 1",
  "title": "Title 1"
}, {
  "previewImageSrc": "assets/7.jpg",
  "thumbnailImageSrc": "assets/thumbnail.jpg",
  "alt": "Description for Image 1",
  "title": "Title 1"
}
, {
  "previewImageSrc": "assets/8.png",
  "thumbnailImageSrc": "assets/thumbnail.jpg",
  "alt": "Description for Image 1",
  "title": "Title 1"
}
, {
  "previewImageSrc": "assets/9.png",
  "thumbnailImageSrc": "assets/thumbnail.jpg",
  "alt": "Description for Image 1",
  "title": "Title 1"
}
, {
  "previewImageSrc": "assets/10.jpg",
  "thumbnailImageSrc": "assets/thumbnail.jpg",
  "alt": "Description for Image 1",
  "title": "Title 1"
}, {
  "previewImageSrc": "assets/Mean_Stack.jpg",
  "thumbnailImageSrc": "assets/thumbnail.jpg",
  "alt": "Udemy Mean Stack Certificate",
  "title": "Mean Stack"
}
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
