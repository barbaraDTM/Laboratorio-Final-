import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {nombre: 'barbara', apellido: 'Delatorre Roldan', socio: 0, dni: '12345678L', telefono: 123456789, sexo:'Mujer'},
    {nombre: 'sol', apellido: 'Vazquez Martinez', socio:23, dni: '12346698G', telefono: 110719987, sexo: 'Mujer' },
    {nombre: 'Alberto', apellido: 'Marquez Gil', socio:50, dni: '87654321M', telefono: 300119799, sexo: 'Hombre' },
    {nombre: 'Damian', apellido: 'Rodriguez Perez', socio:32, dni: '24681357P', telefono: 412193089, sexo: 'Hombre' },
    {nombre: 'Shen', apellido: 'Tianyi Xian', socio:11, dni: '13572468B', telefono: 610208064, sexo: 'Hombre' },
    {nombre: 'Marcos', apellido: 'Garrido Castillo', socio:21, dni: '11131517U', telefono: 610205053, sexo: 'Hombre' },
    {nombre: 'Maria', apellido: 'Gonzalez Carmona', socio:2, dni: '10121416H', telefono: 410288047, sexo: 'Mujer' }
   ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);

  }
}
