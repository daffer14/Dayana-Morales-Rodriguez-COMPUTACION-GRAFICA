import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-cantidad',
  standalone: true,
  imports: [FormsModule, Slider, InputTextModule],
  templateUrl: './cantidad.component.html',
  styleUrl: './cantidad.component.css'
})
export class CantidadComponent {
  value: number = 0;

}
