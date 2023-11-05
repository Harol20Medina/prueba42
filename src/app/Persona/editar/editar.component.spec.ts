import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './editar.component';
import { ServiceService } from 'src/app/Service/service.service';
import { of } from 'rxjs';
import { Persona } from 'src/app/Modelo/PersonaDto.model';

describe('EditarComponent', () => {
  let component: EditarComponent;
  let fixture: ComponentFixture<EditarComponent>;
  let service: ServiceService;

  beforeEach(async () => {
    service = {
      getPersonaId: (id: string) => of({ /* mock de datos de persona */ }),
      updatePersona: (persona: Persona) => of({}),
    } as unknown as ServiceService;

    await TestBed.configureTestingModule({
      declarations: [EditarComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [
        { provide: ServiceService, useValue: service }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
