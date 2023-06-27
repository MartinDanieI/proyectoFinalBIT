import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { Evento } from 'src/app/models/eventos';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { from } from 'rxjs';



@Component({
  selector: 'app-gestion-productos-formulario',
  templateUrl: './gestion-productos-formulario.component.html',
  styleUrls: ['./gestion-productos-formulario.component.css']
})
export class GestionProductosVistaComponent implements OnInit {

  listaEventos: Evento[] = []
  EventoForm:FormGroup
  regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&//=]*)/;
  id: string | null
  titulo_formulario:string = 'Registro de nuevo evento'
  textoBoton:string = 'Editar evento'


  constructor(private _EventosService: EventosService, private fb: FormBuilder,private router:Router, private idRoute: ActivatedRoute){
    this.EventoForm = this.fb.group({
    categoria:['', [Validators.required]],
    nombre:['',[Validators.required]],
    fecha:['',[Validators.required]],
    hora:['',[Validators.required]],
    lugar:['',[Validators.required]],
    descripcion:['',[Validators.required]],
    imagen:['',[Validators.required, Validators.pattern(this.regexUrl)]],
    estado:['',[Validators.requiredTrue]]
  })
  this.id = this.idRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.registrarEditarEvento()
  }

  registrarEditarEvento() {
    if(this.id === null){
        console.log(this.EventoForm)
        this._EventosService.crearEvento(this.EventoForm.value).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Producto registrado',
                confirmButtonColor: "#52874a"
            })
        })
    }else{
        this._EventosService.putEvento(this.id, this.EventoForm.value).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Producto actualizado',
                confirmButtonColor: "#52874a"
            })
        })
    }
    this.router.navigate(['/admin/gestion-productos-vista'])
}

accionSolicitada(){
    if(this.id !== null){
        this.titulo_formulario = "Modificar evento"
        this.textoBoton = "Actualizar evento"
        this._EventosService.obtenerEventoPorNombre(this.id).subscribe(data => {
            this.EventoForm.setValue({
                categoria: data.categoria,
                nombre: data.nombre,
                fecha: data.fecha,
                hora: data.hora,
                lugar: data.lugar,
                descripcion: data.descripcion,
                imagen: data.imagen,
                estado: data.estado,
            })
        })
    }
}
}