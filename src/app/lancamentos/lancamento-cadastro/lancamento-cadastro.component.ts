import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent {
  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2},
  ];

  pessoas = [
    {label: 'João da Silva', value: 1},
    {label: 'Sebastião de Souza', value: 2},
    {label: 'Maria Abadia', value: 3},
  ];

  salvar(form: NgForm) {
    console.log(form.value)
    form.reset({valor: '0,00'});
  }
}
