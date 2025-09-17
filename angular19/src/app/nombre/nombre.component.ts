import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nombre',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule, FormsModule],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.css'
})
export class NombreComponent {
  value1: string | undefined;
}
