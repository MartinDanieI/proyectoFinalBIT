import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario!: FormGroup;
  usuario!: Usuario;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      correo: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      preferencias: [''],
    });
  }

  onSubmit() {
    const { nombre, edad, correo, userName, password, preferencias } = this.formulario.value;
    this.usuario = new Usuario(nombre, edad, correo, userName, password, preferencias, new Date());

    this.usuarioService.crearUsuario(this.usuario)
      .subscribe(
        (response) => {
          console.log(response);
          // hacer algo con la respuesta del backend, como redirigir a otra página
        },
        (error) => console.log(error)
      );
  }
}