import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.scss']
})
export class EditaComponent implements OnInit {
	//llegan todos los datos del formulario
	formularioDeEmpleado:FormGroup;

	elID: any;

  constructor(
		private ativeRoute:ActivatedRoute,
		private crudService:ServiceService,
		public formulario:FormBuilder,
		private ruteador:Router
	) {
		this.elID=this.ativeRoute.snapshot.paramMap.get('id');
		console.log(this.elID);

		this.crudService.ObtenerEmpleado(this.elID).subscribe(
			respuesta=>{
				console.log(respuesta);
				this.formularioDeEmpleado.setValue({
					nome:respuesta[0]['nome'],
					email:respuesta[0]['email'],
          coruja:respuesta[0]['coruja'],
          bios:respuesta[0]['bios']
				});
			}
		);
		this.formularioDeEmpleado=this.formulario.group(
			{
      nome:[''],
			email:[''],
      coruja:[''],
      bios:['']
			}
		);
	}

  ngOnInit(): void {
  }

	enviarDatos():any{
		console.log(this.elID);
		console.log(this.formularioDeEmpleado.value);

		this.crudService.EditarEmpleado(this.elID, this.formularioDeEmpleado.value).subscribe(()=>{
			this.ruteador.navigateByUrl('/edita');
		});

	}

}
