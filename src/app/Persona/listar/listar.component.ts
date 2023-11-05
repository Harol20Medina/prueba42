import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/PersonaDto.model';
import { ServiceService } from 'src/app/Service/service.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getListPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  Editar(persona: Persona): void {
    // Guardar el ID de la persona en el almacenamiento local
    localStorage.setItem("personaId", persona.personaId.toString());
    // Navegar al componente de edición para editar los datos
    this.router.navigate(["editar"]);
  }

  Delete(persona: Persona) {
    this.service.deletePersona(persona).subscribe(data => {
      this.personas = this.personas.filter(p => p !== persona);
      alert("Usuario Eliminado");
    });
  }
}
