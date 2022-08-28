import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  public bagQuantity = 1;
  public bottleQuantity = 1;
  public mugQuantity = 1;


  constructor() { }

  ngOnInit() {
  }

}
