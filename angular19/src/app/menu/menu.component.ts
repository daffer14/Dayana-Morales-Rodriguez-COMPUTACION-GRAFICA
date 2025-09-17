import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, MultiSelectModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  foods!: City[];

    selectedCities!: City[];

    constructor() {
    this.foods = [
        { name: 'Pizza', code: 'PIZ' },
        { name: 'Hamburguesa', code: 'HMB' },
        { name: 'Hot Dog', code: 'HDG' },
        { name: 'Arepa Rellena', code: 'ARP' },
        { name: 'Tacos', code: 'TAC' },
        { name: 'Sushi', code: 'SUS' },
        { name: 'Ensalada César', code: 'ENS' },
        { name: 'Arroz con Pollo', code: 'ACP' },
        { name: 'Lasaña', code: 'LAS' },
        { name: 'Churrasco', code: 'CHU' },
        { name: 'Empanadas', code: 'EMP' },
        { name: 'Perro Caliente', code: 'PRC' },
        { name: 'Pollo Frito', code: 'PFR' },
        { name: 'Carne Asada', code: 'CAS' },
        { name: 'Helado', code: 'HEL' }
    ];
}
}
