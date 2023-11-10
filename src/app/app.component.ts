import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPractica';
  contador = 1;
  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
}
