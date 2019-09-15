import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from '../shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    PessoasPesquisaComponent,
    PessoasCadastroComponent,
    PessoasGridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    DropdownModule,

    MessagesModule,
    MessageModule,
    SharedModule
  ],
  exports: [
    PessoasPesquisaComponent,
    PessoasCadastroComponent,
  ]
})
export class PessoasModule { }
