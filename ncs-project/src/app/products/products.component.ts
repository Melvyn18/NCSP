import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products = [
    new Product('Bag', 69, '../../assets/img/ncsbag.jpg'),
    new Product('Bottle', 79, '../../assets/img/ncsbottle (2).jpg'),
    new Product('Mug', 89, '../../assets/img/ncsmug.jpg')
  ];

  public bagQuantity = 1;
  public bottleQuantity = 1;
  public mugQuantity = 1;

  constructor() { }

  ngOnInit(): void {
  }


  onBagPlus() {
    this.bagQuantity = this.bagQuantity + 1;
    this.products[0].amount = this.products[0].amount + 69;
  }

  onBagMinus() {
    this.bagQuantity = this.bagQuantity - 1;
    this.products[0].amount = this.products[0].amount - 69;
  }
  onBottlePlus() {
    this.bottleQuantity = this.bottleQuantity + 1;
  }

  onBottleMinus() {
    this.bottleQuantity = this.bottleQuantity - 1;
  }
  onMugPlus() {
    this.mugQuantity = this.mugQuantity + 1;
  }

  onMugMinus() {
    this.mugQuantity = this.mugQuantity - 1;
  }

  onAddBag() {

  }

  // onAddBottle(prodBottle: string){
  //   const newProduct = new Product(prodBottle, this.bottleQuantity, this.bottleAmount, this.bottleimage);
  //   this.products.push(newProduct);
  // }

  // onAddMug(prodMug: string){
  //   const newProduct = new Product(prodMug, this.mugQuantity, this.mugAmount, this.mugimage);
  //   this.products.push(newProduct);
  // }
}
