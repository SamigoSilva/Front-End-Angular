import { stored } from './../product-list/model/stored';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

  @Input()
  livros!: stored;
  constructor() { }

  ngOnInit(): void {
  }

}
