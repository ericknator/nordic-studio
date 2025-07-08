import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  enviarFormulario(event: Event) {
    event.preventDefault();
    alert('✅ Mensaje enviado correctamente (simulado)');
  }
}