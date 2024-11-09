import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProdutosComponent } from './components/lists/lista-produtos/lista-produtos/lista-produtos.component';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/lists/item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeStoreServiceService } from './core/services/fake-store-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListaProdutosComponent,
    CommonModule,
    ItemListComponent,
    HttpClientModule,  // Mova HttpClientModule para imports
  ],
  providers:[FakeStoreServiceService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrija para styleUrls no plural
})
export class AppComponent {
  title = 'FakeStoreApp';
}
