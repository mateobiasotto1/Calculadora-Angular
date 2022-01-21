import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Calculadora basica';
  operandoA: number = 0;
  operandoB: number = 0;
  resultado:number = 0;

  sumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }
  restar():void{
    this.resultado = this.operandoA - this.operandoB;
  }
  multiplicar():void{
    this.resultado = this.operandoA * this.operandoB;
  }
  borrar():void{
    this.resultado = 0;
    this.operandoA = 0;
    this.operandoB = 0;
    this.resultado = 0;
  }
}
