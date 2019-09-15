import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {
  cidades = [
    {label: 'São Paulo', value: 'São Paulo'},
    {label: 'Rio de Janeiro', value: 'Rio de Janeiro'},
  ];

  estados = [
    {label: 'SP', value: 'SP'},
    {label: 'RJ', value: 'RJ'},
  ];

}
