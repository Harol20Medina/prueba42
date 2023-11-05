import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/PersonaDto.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  // Ajusta la URL del endpoint de acuerdo a tu configuración de servidor
  endpoint = 'http://localhost:8094/personas';

  getListPersonas() {
    return this.http.get<Persona[]>(this.endpoint);
  }

  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.endpoint, persona);
  }

  getPersonaId(id: number) {
    return this.http.get<Persona>(`${this.endpoint}/${id}`);
  }

  updatePersona(persona: Persona) {
    return this.http.put(`${this.endpoint}/${persona.personaId}`, persona);
  }

  deletePersona(persona: Persona) {
    return this.http.delete(`${this.endpoint}/${persona.personaId}`);
  }
}
