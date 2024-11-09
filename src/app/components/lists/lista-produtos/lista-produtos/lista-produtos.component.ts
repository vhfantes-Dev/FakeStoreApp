import { Component, OnInit } from '@angular/core';
import { FakeStoreServiceService } from '../../../../core/services/fake-store-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {
  produtos: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';
  currentPage: number = 1;
  limit: number = 8;
  carrinho: any[] = []; // Array para armazenar os produtos no carrinho
  modalAberto: boolean = false; // Controle para abrir e fechar o modal

  constructor(private fakeStoreService: FakeStoreServiceService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.fakeStoreService.getProductsLimit(this.limit).subscribe((data) => {
      this.produtos = data;
      this.filteredProducts = data;
    });
  }

  loadCategories(): void {
    this.fakeStoreService.getProductCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onCategoryChange(): void {
    if (this.selectedCategory) {
      this.fakeStoreService.getProductsByCategory(this.selectedCategory).subscribe((data) => {
        this.filteredProducts = data;
      });
    } else {
      this.loadProducts();
    }
  }

  onSearch(): void {
    if (this.searchQuery) {
      this.filteredProducts = this.produtos.filter((product) =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = this.produtos;
    }
  }

  changePage(direction: string): void {
    if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    } else if (direction === 'next' && !this.isLastPage()) {
      this.currentPage++;
    }
    this.loadPaginatedProducts();
  }

  isLastPage(): boolean {
    return this.filteredProducts.length < this.limit;
  }

  loadPaginatedProducts(): void {
    this.fakeStoreService.getProductsLimit(this.limit * this.currentPage).subscribe((data) => {
      this.produtos = data;
      this.filteredProducts = data.slice((this.currentPage - 1) * this.limit, this.currentPage * this.limit);
    });
  }

  // Método para adicionar um produto ao carrinho
  addToCart(product: any): void {
    const existingItem = this.carrinho.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const item = { ...product, quantity: 1 }; // Definir a quantidade inicial como 1
      this.carrinho.push(item);
    }
  }

  // Método para abrir o modal do carrinho
  openCartModal(): void {
    this.modalAberto = true;
  }

  // Método para fechar o modal do carrinho
  closeCartModal(): void {
    this.modalAberto = false;
  }

  // Método para remover um item do carrinho
  removeItem(item: any): void {
    const index = this.carrinho.indexOf(item);
    if (index !== -1) {
      this.carrinho.splice(index, 1);
    }
  }

  // Método para aumentar a quantidade de um item no carrinho
  increaseQuantity(item: any): void {
    item.quantity++;
  }

  // Método para diminuir a quantidade de um item no carrinho
  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Método para calcular o total do carrinho
  getTotal(): number {
    return this.carrinho.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
