import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>La puta madre</h1> 
  <p>{{myobjeto.locacion}}</p>
   <ul>
      <li *ngFor="let arr of myArray">{{ arr }}</li>
   </ul>
   <ul>
      <li *ngIf="myArray=='nuestro'">Si , existo</li>
   </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';

  myArray = ['de_el', 'de_ella' , 'nuestro'];
 /* 
 Agregar al template : <p>{{myobjeto.locacion}}</p>*/
 myobjeto = {
    sexo: 'hombre',
    edad: '36',
    locacion: 'ARG'
  }

  

}
