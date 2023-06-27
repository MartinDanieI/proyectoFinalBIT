import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { Evento } from 'src/app/models/eventos'
import Swal from 'sweetalert2';



@Component({
  selector: 'app-gestion-productos-vista',
  templateUrl: './gestion-productos-vista.component.html',
  styleUrls: ['./gestion-productos-vista.component.css']
})
export class GestionProductosVistaComponent implements OnInit {

  listaEventos: Evento[] = []
  paginacionApu:any


  constructor(private _EventosService: EventosService){}

  ngOnInit(): void {
    this.obtenerEventos()
  }

  obtenerEventos(){
    this._EventosService.obtenerEventos().subscribe(data =>{
      console.log(data)
      this.listaEventos = data.eventos
      this.paginacionApu = data.pagination
      console.log(this.listaEventos)
      console.log(this.paginacionApu)
    })
  }

  eliminarEvento(id: any){
    Swal.fire({
              title: 'Esta seguro que desea eliminar esta orden?',
              text: "Esta acción no se podrá deshacer",
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Aceptar',
              cancelButtonText: 'Cancelar',
              backdrop: `
                  rgba(15, 15, 15, 0.58)
                  left top
                  no-repeat
              `
          }).then((result) => {
              if (result.isConfirmed) {
                  this._EventosService.deleteEvento(id).subscribe(data => {
                      Swal.fire({
                          icon: 'success',
                          title: 'Evento eliminada'
                      })
                      this.obtenerEventos()
                  })
              }
          })
      }
  }