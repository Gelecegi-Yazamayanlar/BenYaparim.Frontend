import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

interface Product {
  productName: string;
  unitPrice: number;
  quantity: number;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    this.product2 = this.product3;
    this.product3.productName = 'karpuz';
    console.log(this.product2);
    console.log(this.product3.productName);
    console.log(this.product2.productName);

    console.log(
      (
        this.product4 as {
          productName: string;
          unitPrice: number;
          quantity: number;
        }
      ).productName,
    );
  }
  product2: { productName: string; unitPrice: number; quantity: number } = {
    productName: 'Elma',
    unitPrice: 10,
    quantity: 5,
  };
  product3: Product = { productName: 'Armut', unitPrice: 10, quantity: 10 };

  product4: unknown = { productName: 'Armut', unitPrice: 10, quantity: 10 };
}
