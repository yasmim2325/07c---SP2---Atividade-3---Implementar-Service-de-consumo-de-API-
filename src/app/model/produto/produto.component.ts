import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

}


export class Produto{
  id: number = 0;
  produto: string ="";
  descricao: string="";
  foto: string="";
  preco: number=0;
  constructor(id: number,produto: string,descricao: string, foto: string,preco:
  number){
  this.id = id;
  this.produto = produto;
  this.descricao = descricao;
  this.foto = foto;
  this.preco = preco;
  }
  }