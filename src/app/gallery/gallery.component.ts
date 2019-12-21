import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  isImage1:boolean
path:any;
allpath:any[]=[];
  constructor() { }

  ngOnInit() {
    this.allpath = ["assets/images/g1.jpg","assets/images/bb2.jpg","assets/images/bb3.jpg","assets/images/g2.jpg","assets/images/g3.jpg","assets/images/g4.jpg"]
  }
  showImage1(event)
  {
console.log(event.srcElement.src)
this.isImage1=true;
this.path=event.srcElement.src;
  }

}
