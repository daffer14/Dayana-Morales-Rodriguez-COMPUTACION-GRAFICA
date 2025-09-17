import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { CheckComponent } from './check/check.component';
import { NombreComponent } from "./nombre/nombre.component";
import { EdadComponent } from "./telefono/edad.component";
import { CodigoComponent } from "./codigo/codigo.component";
import { MenuComponent } from "./menu/menu.component";
import { OpcionComponent } from "./opcion/opcion.component";
import { CalificarComponent } from "./calificar/calificar.component";
import { CantidadComponent } from "./cantidad/cantidad.component";
import { SugerenciaComponent } from "./sugerencia/sugerencia.component";
import { EnviarComponent } from "./enviar/enviar.component";



@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, ButtonModule, CheckComponent, NombreComponent, EdadComponent, CodigoComponent, MenuComponent, OpcionComponent, CalificarComponent, CantidadComponent, SugerenciaComponent, EnviarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'proyectoAngular';
  constructor(private messageService: MessageService) {}

}
