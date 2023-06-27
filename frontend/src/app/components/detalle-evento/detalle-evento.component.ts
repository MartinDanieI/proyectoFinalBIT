import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/eventos';
import { EventosService } from 'src/app/services/eventos.service';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent implements OnInit {
  evento!: Evento;

  @ViewChild('carousel1', { static: false }) carousel1!: ElementRef;
  @ViewChild('carousel2', { static: false }) carousel2!: ElementRef;

  constructor(
    private eventosService: EventosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    if (nombre) {
      this.eventosService.obtenerEventoPorNombre(nombre).subscribe(
        (data) => {
          this.evento = data;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      // manejar el caso en que el parámetro 'nombre' no esté presente en la URL
      console.log('El parámetro "nombre" no se encuentra en la URL');
    }
  }

  next(): void {
    const carousel1Instance = new Carousel(this.carousel1.nativeElement);
    const carousel2Instance = new Carousel(this.carousel2.nativeElement);
  
    carousel1Instance.next();
    carousel2Instance.next();
  }
}