import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(
          this.loginForm.get('userName')!.value,
          this.loginForm.get('password')!.value
        )
        .subscribe(
          () => {
            console.log('Inicio de sesión exitoso');
            this.router.navigate(['/perfil']); // Reemplaza '/ruta-deseada' con la ruta a la que deseas dirigir al usuario después del inicio de sesión
          },
          (error) => {
            console.log('Error al iniciar sesión', error);
          }
        );
    }
  }
}