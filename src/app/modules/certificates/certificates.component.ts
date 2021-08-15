import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  
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
      "previewImageSrc": "assets/Certificate1.jpg",
     // "thumbnailImageSrc": "assets/profImage.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
      "previewImageSrc": "assets/trophy1.jpg",
     // "thumbnailImageSrc": "assets/profImage.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
