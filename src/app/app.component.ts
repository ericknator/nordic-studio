import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 CLAVE
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // 👈 IMPORTAMOS COMPONENTES STANDALONE
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nordic-studio';
}
