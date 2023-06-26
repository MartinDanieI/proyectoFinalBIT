import { Component, OnInit } from '@angular/core';
import { EventosSharedService } from 'src/app/services/eventos-shared.service';


@Component({
  selector: 'app-evento-nombre',
  templateUrl: './evento-nombre.component.html',
  styleUrls: ['./evento-nombre.component.css']
})
export class EventoNombreComponent implements OnInit{
  selectedEventName: string = '';

  constructor(private eventosSharedService: EventosSharedService) { }

  ngOnInit(): void {
    this.eventosSharedService.getSelectedEventName().subscribe((name) => {
      console.log('Selected Event Name:', name); // add this line
      this.selectedEventName = name;
    });
  }

}
