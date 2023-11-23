import { Component } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrl: './socios.component.css'
})
export class SociosComponent {

  inputValue:String='';
  resultado:String='';
  mostrar(){
    this.resultado=this.inputValue
  }

}
