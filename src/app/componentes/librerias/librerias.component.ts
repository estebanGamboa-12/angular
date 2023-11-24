import { Component } from '@angular/core';

@Component({
  selector: 'app-librerias',
  templateUrl: './librerias.component.html',
  styleUrl: './librerias.component.css'
})
export class LibreriasComponent {

  inputValue:String='';
  listaLibros:String[]=[];

  mostrar(event:any):void{
    this.inputValue=event.target.value;
  }
  agregarLibros():void{
    this.listaLibros.push(this.inputValue);
  }
 
}
