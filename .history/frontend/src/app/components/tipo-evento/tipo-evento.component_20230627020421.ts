import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventosService } from "src/app/services/eventos.service";

@Component({
  selector: 'app-tipo-evento',
  templateUrl: './tipo-evento.component.html',
  styleUrls: ['./tipo-evento.component.css']
})
export class TipoEventoComponent {

  typeEvent: string | null = "no route";

  constructor(
    public activeRoute: ActivatedRoute,
    public router: Router,
    public eventosService: EventosService
  ) {}

  ngOnInit() {
    this.setTypeEvent();
  }

  setTypeEvent() {
    this.typeEvent = this.activeRoute.snapshot.queryParamMap.get("type");

    if (
      this.typeEvent !== "" &&
      this.typeEvent !== "fiestas" &&
      this.typeEvent !== "sociales" &&
      this.typeEvent !== "deportivos" &&
      this.typeEvent !== "culturales" &&
      this.typeEvent !== "familiares" &&
      this.typeEvent !== "festivales"
    ) {
      console.log(this.typeEvent)
    }

    // llamar al api
    this.eventosService.eventoPorCategoria(this.typeEvent || "fiestas").subscribe(
      (data) => {
        console.log(data)
        this.eventosService.eventsList = data
      },
      (err) => console.log(err)
    );

    console.log(this.typeEvent);
    return;
  }

}
