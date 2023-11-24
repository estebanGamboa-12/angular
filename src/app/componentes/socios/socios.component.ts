import { Component } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrl: './socios.component.css'
})
export class SociosComponent {

  inputValue:String='';
  listaSocios:String[]=[];
 
  mostrar(event:any):void{
    this.inputValue=event.target.value
  }
  agregarSocios():void{
    this.listaSocios.push(this.inputValue);
  }

}
