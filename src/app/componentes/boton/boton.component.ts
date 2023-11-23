import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {

  @Output() valorAñadido = new EventEmitter<string>();

  añadirValor() {  
    this.valorAñadido.emit(nuevoValor);
  }

}
