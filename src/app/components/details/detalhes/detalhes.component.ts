import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FakeStoreServiceService } from '../../../core/services/fake-store-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private fakeStoreService: FakeStoreServiceService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    
    if (productId) {
      const productIdNumber = +productId; // Conversão para número (usando o operador +)
      this.fakeStoreService.getProductById(productIdNumber).subscribe((data) => {
        this.product = data;
      });
    }
  }
}
