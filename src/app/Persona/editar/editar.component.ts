import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/PersonaDto.model';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  personaNueva: Persona = new Persona();
  form: FormGroup;

  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
    this.form = this.fb.group({
      n_persona: ['', Validators.required],
      a_materno: [''],
      sexo: [''],
      email: [''],
      telefono: [''],
      dni: ['']
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la persona a editar desde el almacenamiento local
    const personaId = +localStorage.getItem('personaId');

    if (personaId) {
      // Obtener los detalles de la persona por su ID
      this.service.getPersonaId(personaId).subscribe(data => {
        this.personaNueva = data;
        // Establecer los valores en el formulario
        this.form.setValue({
          n_persona: this.personaNueva.n_persona,
          a_materno: this.personaNueva.a_materno,
          sexo: this.personaNueva.sexo,
          email: this.personaNueva.email,
          telefono: this.personaNueva.telefono,
          dni: this.personaNueva.dni
        });
      });
    }
  }

  actualizarPersona() {
    // Obtener los valores del formulario y asignarlos a personaNueva
    this.personaNueva.n_persona = this.form.get('n_persona').value;
    this.personaNueva.a_materno = this.form.get('a_materno').value;
    this.personaNueva.sexo = this.form.get('sexo').value;
    this.personaNueva.email = this.form.get('email').value;
    this.personaNueva.telefono = this.form.get('telefono').value;
    this.personaNueva.dni = this.form.get('dni').value;

    // Actualizar los datos de la persona utilizando el servicio
    this.service.updatePersona(this.personaNueva).subscribe(() => {
      // Actualización exitosa, redirigir a la página deseada (por ejemplo, la lista)
      this.router.navigate(['/listar']);
    });
  }
}
