import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sugerencia',
  standalone: true,
  imports: [FormsModule, TextareaModule],
  templateUrl: './sugerencia.component.html',
  styleUrl: './sugerencia.component.css'
})
export class SugerenciaComponent {
  value!: string;
}
