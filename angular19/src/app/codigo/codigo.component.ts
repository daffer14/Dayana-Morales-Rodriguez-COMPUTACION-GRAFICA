import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-codigo',
  imports: [FormsModule, InputOtp],
  standalone: true,
  templateUrl: './codigo.component.html',
  styleUrl: './codigo.component.css'
})
export class CodigoComponent {
  value3 : any
}
