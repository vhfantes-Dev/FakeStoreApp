import { Routes } from '@angular/router';
import { ExecPageComponent } from './pages/exercicio/exec-page/exec-page.component';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './components/lists/lista-produtos/lista-produtos/lista-produtos.component';
import { DetalhesComponent } from './components/details/detalhes/detalhes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/produto', pathMatch: 'full' },
    { path: 'produto', component: ListaProdutosComponent },
    { path: 'exec', component: ExecPageComponent },  // Adicionando a rota para o ExecPageComponent
    { path: 'produto/:id', component:DetalhesComponent  },  // Adicionando a rota para o ExecPageComponent
  ];
