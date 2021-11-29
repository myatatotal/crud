import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


	Empleados:any;

  constructor(
		private crudSrevice:ServiceService
	) { }

  ngOnInit(): void {
		this.crudSrevice.ObtenerEmpleados().subscribe(respuesta=>{
			console.log(respuesta);
			this.Empleados=respuesta;

		});

  }

	borrarRegistro(id:any, iControl:any){
		console.log(id);
		console.log(iControl);
		if(window.confirm("¿Desea borrar el registro?")){
			this.crudSrevice.BorrarEmpleado(id).subscribe((respuesta)=>{
				this.Empleados.splice(iControl,1);
			});
		}
	}

}
