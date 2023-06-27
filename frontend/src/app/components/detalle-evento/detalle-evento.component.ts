import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent {
  // evento: any;

  // constructor(
  //   private eventosService: EventosService,
  //   private route: ActivatedRoute
  // ) { }

  // ngOnInit(): void {
  //   const nombre = this.route.snapshot.paramMap.get('nombre');
  //   this.eventosService.obtenerEventoPorNombre(nombre)
  //     .subscribe(data => {
  //       this.evento = data;
  //     });
  // }

}