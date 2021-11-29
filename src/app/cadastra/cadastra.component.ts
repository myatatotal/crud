import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ServiceService } from '../shared/service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.scss']
})
export class CadastraComponent implements OnInit {

//llegan todos los datos del formulario
formularioDeEmpleado:FormGroup;

//recibimostodos los datos formados dentro de un group
constructor(
  public formulario:FormBuilder,
  private crudService:ServiceService,
  private ruteador:Router
  ) {

  this.formularioDeEmpleado = this.formulario.group({
    nome:[''],
    email:[''],
    coruja:[''],
    bios:['']
  });

}

ngOnInit(): void {
}

enviarDatos(): any{
  console.log("me presionaste");
  console.log(this.formularioDeEmpleado.value);

  this.crudService.AgregarEmpleado(this.formularioDeEmpleado.value).subscribe(respuesta=>{
    this.ruteador.navigateByUrl('/edita');
  });
}

}
