import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: 'app-opcion',
  standalone: true,
  imports: [FormsModule, SelectButton],
  templateUrl: './opcion.component.html',
  styleUrl: './opcion.component.css'
})
export class OpcionComponent {
  stateOptions: any[] = [{ label: 'Si', value: 'one-way' },{ label: 'No', value: 'return' }];

  value: string = 'off';
}
