import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Evento } from "src/app/models/eventos";
import { EventosService } from "src/app/services/eventos.service";

@Component({
  selector: "app-registroevents",
  templateUrl: "./registroevents.component.html",
  styleUrls: ["./registroevents.component.css"],
})
export class RegistroeventsComponent {
  eventoForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private _eventoService: EventosService,
    public router: Router
  ) {}

  ngOnInit() {
    this.eventoForm = this.formBuilder.group({
      categoria: ["", Validators.required],
      nombre: ["", Validators.required],
      fecha: ["", Validators.required],
      hora: ["", Validators.required],
      lugar: ["", Validators.required],
      descripcion: ["", Validators.required],
      imagen: ["", Validators.required],
      estado: [true],
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  cargarImagen() {

    let promise = new Promise((res, rej) => {
      if (this.selectedFile) {
        const formData: FormData = new FormData();
        formData.append("file", this.selectedFile, this.selectedFile.name);
        this._eventoService.cargarImagen(formData).subscribe(
          async (data: any) => {
            console.log("Imagen cargada exitosamente");
            res(data.url)
          },
          (error) => {
            console.error("Error al cargar la imagen:", error);
            rej("Error")
          }
        );
      }
    })

    return promise
  }

  async crearEvento() {
    let eventoData: any = {
      categoria: this.eventoForm.value.categoria,
      nombre: this.eventoForm.value.nombre,
      fecha: this.eventoForm.value.fecha,
      hora: this.eventoForm.value.hora,
      lugar: this.eventoForm.value.lugar,
      descripcion: this.eventoForm.value.descripcion,
      imagen: await this.cargarImagen() || "",
      estado: this.eventoForm.value.estado,
    };
    // cargar imagen antes de crear el evento

    this._eventoService.crearEvento(eventoData).subscribe(
      (response) => {
        console.log("Evento creado exitosamente", response);
        alert("Evento Creado");
      },
      (error) => {
        console.error("Error al crear el evento", error);
        alert("Error al crear el evento");
      }
    );
  }
}
