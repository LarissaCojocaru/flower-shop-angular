import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 products = [
  {id:1, name: "Roses" ,  price: '20', color: 'red', available: 'Available', image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjc1My1jYTM1XzEucG5n.png?s=qy3Oj-E9P5fJsYO-9d0bGu9J-AfzSrPjnKcJhvUEjSE'},
  {id:2, name: "Petunia" ,  price: '25', color: 'white', available: 'Available', image: 'https://www.pngitem.com/pimgs/m/348-3481282_white-petunia-transparent-hd-png-download.png'},
  {id:3, name: "Sunflower" ,  price: '24', color: 'yellow', available: ' Not Available', image: 'https://thumbs.dreamstime.com/z/close-up-beautiful-bright-sunflowers-high-resolution-image-closeup-sunflower-high-resolution-image-147055933.jpg'},
  {id:4, name: "Dandelion" ,  price: '15', color: 'grey', available: 'Available', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrV6nL_cCijOHrHaYLwB80GTlKcPy7o335Q&usqp=CAU'},
  {id:5, name: "Lotus" ,  price: '30', color: 'pink',  available: ' Not Available', image: 'https://w7.pngwing.com/pngs/371/963/png-transparent-high-definition-television-display-resolution-nelumbo-nucifera-lotus-television-sacred-lotus-flower.png'},
  {id:6, name: "Lavander" ,  price: '40', color: 'purple', available: 'Available', image: 'https://cdn.imgbin.com/4/10/20/imgbin-lavender-bunch-purple-petaled-flowers-Fr5P2sn9tV2HymWmJ2hQNxAeA.jpg'},

 ]

 searchText: string = '';

 onSearchTextEntered(searchValue: string){
  this.searchText = searchValue.toLowerCase();
 }
}
