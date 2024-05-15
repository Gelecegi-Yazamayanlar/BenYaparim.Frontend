import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from '../../services/product.service';
import { KimYaparCardComponent } from '../kim-yapar-card/kim-yapar-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kim-yapar-list',
  standalone: true,
  imports: [KimYaparCardComponent, CommonModule],
  templateUrl: './kim-yapar-list.component.html',
  styleUrl: './kim-yapar-list.component.css',
})
export class KimYaparListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log('mahmut');
      console.log(this.products);
    });
  }
}
