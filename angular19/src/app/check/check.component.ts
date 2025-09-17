import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [FormsModule, Checkbox],
  templateUrl: './check.component.html',
  styleUrl: './check.component.css'
})
export class CheckComponent {
  pizza: string[] = [];
}
