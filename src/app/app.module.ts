import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardModule} from 'primeng/card';
import { InputTextModule} from 'primeng/inputtext';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { DropdownModule} from 'primeng/dropdown';
import { ButtonModule} from 'primeng/button';
import { SelectButtonModule} from 'primeng/selectbutton';
import { TableModule} from 'primeng/table';
import { TooltipModule} from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputMaskModule} from 'primeng/inputmask';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";


import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { FormsModule } from '@angular/forms';


export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "right",
    allowNegative: false,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    CampoColoridoDirective,
    LancamentoCadastroComponent,
    PessoaCadastroComponent
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    SelectButtonModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    TooltipModule,
    CalendarModule,
    CurrencyMaskModule,
    InputMaskModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    AppRoutingModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
