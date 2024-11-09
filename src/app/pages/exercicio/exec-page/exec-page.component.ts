import { Component } from '@angular/core';
import { ItemListComponent } from '../../../components/lists/item-list/item-list.component';
import { DadosBiComponent } from '../../../components/dadosBidirecional/dados-bi/dados-bi.component';
import { DadosDiretivosComponent } from '../../../components/dadosCondicionais/dados-diretivos/dados-diretivos.component';
import { DataInputComponent } from '../../../components/data/data-input/data-input.component';
import { RouterModule } from '@angular/router';
import { FormBasicoComponent } from '../../../components/form/form-basico/form-basico.component';
import { PipeBasicoComponent } from '../../../components/pipe/pipe-basico/pipe-basico.component';
import { AnimacaoBasicaComponent } from '../../../components/animacao/animacao-basica/animacao-basica.component';

@Component({
  selector: 'app-exec-page',
  standalone: true,
  imports: [ItemListComponent,DadosBiComponent,DadosDiretivosComponent,DataInputComponent,RouterModule,FormBasicoComponent,PipeBasicoComponent,AnimacaoBasicaComponent],
  templateUrl: './exec-page.component.html',
  styleUrl: './exec-page.component.scss'
})
export class ExecPageComponent {

}
