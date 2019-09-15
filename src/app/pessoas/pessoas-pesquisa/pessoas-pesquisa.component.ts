import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  title = 'algamoney-ui';
  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlandia', estado: 'MG', ativo: true },
    { nome: 'Sebastiao da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true },
    { nome: 'Luís Pereira', cidade: 'Curitiva', estado: 'PR', ativo: true },
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Tiago Souza', cidade: 'Montes Claros', estado: 'MG', ativo: true },
  ];
}
