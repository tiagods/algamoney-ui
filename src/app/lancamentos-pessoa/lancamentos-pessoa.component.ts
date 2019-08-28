import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pessoa',
  templateUrl: './lancamentos-pessoa.component.html',
  styleUrls: ['./lancamentos-pessoa.component.css']
})
export class LancamentosPessoaComponent{
  title = 'algamoney-ui';
  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlandia', estado: 'MG', status: 'Ativo'},
    { nome: 'Sebastiao da Silva', cidade: 'São Paulo', estado: 'SP', status: 'Inativo'},
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', status: 'Ativo'},
    { nome: 'Luís Pereira', cidade: 'Curitiva', estado: 'PR', status: 'Ativo'},
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'Inativo'},
    { nome: 'Tiago Souza', cidade: 'Montes Claros', estado: 'MG', status: 'Ativo'},
  ];
}
