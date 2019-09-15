import { CoreModule } from './core/core.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './core/navbar/navbar.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CampoColoridoDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    CoreModule,
    PessoasModule,
    LancamentosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
