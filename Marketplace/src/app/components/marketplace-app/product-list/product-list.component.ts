import { stored } from './model/stored';
import { StoredService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros : any;
  storedService : StoredService;

  constructor(storedService : StoredService) {
    this.storedService = storedService;
   }

  ngOnInit(): void {

    this.livros = this.storedService.getStored().subscribe((data =>{
      this.livros = data;
      console.log(this.livros);
    }))

  }

}
