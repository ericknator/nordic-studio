import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  enviado = false;

  enviarFormulario(event: Event) {
    event.preventDefault();
    this.enviado = true;

    setTimeout(() => {
      this.enviado = false;
    }, 3000);
  }
}
