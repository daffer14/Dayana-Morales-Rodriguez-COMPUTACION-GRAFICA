import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-calificar',
  standalone: true,
  imports: [FormsModule, Rating],
  templateUrl: './calificar.component.html',
  styleUrl: './calificar.component.css'
})
export class CalificarComponent {
  value!: number;
}
