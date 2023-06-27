export class Usuario {
    nombre: string = '';
    edad: number = 0;
    correo: string = '';
    userName: string = '';
    password: string = '';
    preferencias: string[] = [];
    horaRegistro: Date = new Date();

    constructor(
        nombre: string,
        edad: number,
        correo: string,
        userName: string,
        password: string,
        preferencias: string[],
        horaRegistro: Date
    ) {
      this.nombre = nombre;
      this.edad = edad;
      this.correo = correo;
      this.userName = userName;
      this.password = password;
      this.preferencias = preferencias;
      this.horaRegistro = horaRegistro
    }
  }