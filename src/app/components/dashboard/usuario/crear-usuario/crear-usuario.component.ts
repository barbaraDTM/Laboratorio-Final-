import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  sexo: any[] = ['femenino','masculino'];
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private _usuarioService: UsuarioService,
              private router: Router,
              private _snackBar: MatSnackBar) {

    this.form =this.fb.group({
      nombre: [''],
      apellido: [''],
      socio: [''],
      dni: [''],
      telefono: [''],
      sexo: [''],
    })
  }

  ngOnInit(): void {
     this.form = new UntypedFormGroup({
      'nombre': new UntypedFormControl( null, [Validators.required, Validators.minLength(3)]),
      'apellido': new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
      'socio': new UntypedFormControl(null, Validators.required),
      'dni': new UntypedFormControl(null, [Validators.required, Validators.maxLength(9)]),

      'telefono': new UntypedFormControl(null, Validators.required),
      'sexo': new UntypedFormControl(null, Validators.required),
     });

  }

  agregarUsuario() {

    const user: Usuario = {

      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      socio: this.form.value.socio,
      dni: this.form.value.dni,
      telefono: this.form.value.telefono,
      sexo: this.form.value.sexo,
    }
    if(this.esRepetido(this.form.value.socio,this._usuarioService.listUsuarios))
    {
      this._snackBar.open('El Socio ya existe introduzca uno nuevo', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      })
    }
    else{
      this._usuarioService.agregarUsuario(user);
      this.router.navigate(['/dashboard/usuario'])

     this._snackBar.open('El Usuario ha sido agregado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      })
    }

   }
   esRepetido(valor:number, lista:any) {
     var aux=false;
     var valorAuxiliar;
     for(var i=0;i<this._usuarioService.listUsuarios.length;i++){
     valorAuxiliar=this._usuarioService.listUsuarios[i].socio;
      if (valorAuxiliar ==valor){
        aux=true;
      }
    }
    return(aux);
  }
}
