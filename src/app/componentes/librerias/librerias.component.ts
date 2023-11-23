import { Component } from '@angular/core';

@Component({
  selector: 'app-librerias',
  templateUrl: './librerias.component.html',
  styleUrl: './librerias.component.css'
})
export class LibreriasComponent {

  inputValue:String='';
  resultadoEnTiempoReal:String='';
  libros:String[]=[]
  mostrarEnTiempoReal(){
    this.resultadoEnTiempoReal=this.inputValue;
  }
  recibirDatos(dato:String){
    this.libros.push(dato);
  }
}
