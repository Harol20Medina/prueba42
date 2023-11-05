import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPersona } from 'src/app/Modelo/Persona.interface';
import { Persona } from 'src/app/Modelo/PersonaDto.model';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  personaNueva: Persona = new Persona();
  
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {
  }

  Guardar(event: Event) {
    this.service.createPersona(this.personaNueva)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
          console.log("ok");
          this.router.navigate(['/listar']); // Redirige a la lista de personas después de guardar
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
