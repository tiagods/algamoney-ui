import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent {
  cidades = [
    {label: 'São Paulo', value: 'São Paulo'},
    {label: 'Rio de Janeiro', value: 'Rio de Janeiro'},
  ];

  estados = [
    {label: 'SP', value: 'SP'},
    {label: 'RJ', value: 'RJ'},
  ];

  salvar(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}
