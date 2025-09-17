import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
  selector: 'app-edad',
  standalone: true,
  imports: [FormsModule, InputNumber, Fluid],
  templateUrl: './edad.component.html',
  styleUrl: './edad.component.css'
})
export class EdadComponent {
  value1: number = 0;
}
