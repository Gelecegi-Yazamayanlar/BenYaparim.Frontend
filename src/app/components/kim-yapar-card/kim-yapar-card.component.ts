import { Component, OnInit, Input } from '@angular/core';
import { ProductService, IProduct } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kim-yapar-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kim-yapar-card.component.html',
  styleUrl: './kim-yapar-card.component.css',
})
export class KimYaparCardComponent {
  @Input() product!: IProduct;

  loading: boolean = true;

  onLoad() {
    this.loading = false;
  }
}
