import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from "@angular/core";
import { Evento } from "src/app/models/eventos";
import { EventosService } from "src/app/services/eventos.service";
import { OwlOptions, CarouselComponent } from "ngx-owl-carousel-o";
import { EventosSharedService } from "src/app/services/eventos-shared.service";

@Component({
  selector: "app-evento-wasimodo",
  templateUrl: "./evento-wasimodo.component.html",
  styleUrls: ["./evento-wasimodo.component.css"],
})
export class EventoWasimodoComponent implements OnInit, AfterViewInit {
  listaEventos: Evento[] = [];
  currentPercentage: number = 0;

  // Add ViewChild for accessing the carousel component
  @ViewChild("carousel", { static: false }) carousel: any;

  onCarouselTranslate(event: any): void {
    const currentSlideIndex = event.item.index;
    this.calculatePercentage(currentSlideIndex);
    const selectedEventName = this.listaEventos[currentSlideIndex].nombre;
    this.eventosSharedService.setSelectedEventName(selectedEventName);
  }

  calculatePercentage(currentSlideIndex: number): void {
    const totalSlides = this.listaEventos.length;
    this.currentPercentage = Math.round(((currentSlideIndex + 1) / totalSlides) * 100);
    const selectedEventName = this.listaEventos[currentSlideIndex].nombre;
    console.log('Selected Event Name:', selectedEventName); // add this line
    this.eventosSharedService.setSelectedEventName(selectedEventName);
  }

  onCarouselChange(event: any): void {
    const currentSlideIndex = event.item.index;
    this.calculatePercentage(currentSlideIndex);
  }
  onCarouselInitialized(event: any): void {
    this.carousel.slidesData.changes.subscribe((change: any) => {
      const currentSlideIndex = this.carousel.slidesData.toArray().findIndex((slide: any) => slide.isActive);
      this.calculatePercentage(currentSlideIndex);
    });
  }

  customOptions: OwlOptions = {

    loop: true,
    autoplay: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    items: 3,
    stagePadding: 300,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
  };

  constructor(private _eventService: EventosService, private eventosSharedService: EventosSharedService,
    private renderer: Renderer2,
    private el: ElementRef) {}

  ngOnInit(): void {
    this.getEventos();
  }

  ngAfterViewInit(): void {
    this.addMouseWheelEventListener();
    this.addMouseOverEventListener();
  }

  

  getEventos() {
    this._eventService.obtenerEventos().subscribe(
      (data) => {
        this.listaEventos = data.eventos;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  

  addMouseWheelEventListener() {
    const scrollThreshold = 60; // Adjust this value to control the scroll sensitivity
  
    this.carousel.el.nativeElement.addEventListener('wheel', (event: WheelEvent) => {
      if (Math.abs(event.deltaY) >= scrollThreshold) {
        if (event.deltaY > 0) {
          this.carousel.next();
        } else {
          this.carousel.prev();
        }
      }
      event.preventDefault();
    });
  }

  addMouseOverEventListener() {
    const imageElements = this.el.nativeElement.querySelectorAll('.carousel-image-portrait');
    const scrollThreshold = 90; // Adjust this value to control the scroll sensitivity
    
    imageElements.forEach((imageElement: any) => {
      this.renderer.listen(imageElement, 'mouseover', () => {
        const currentSlideIndex = this.carousel.slidesData.toArray().findIndex((slide: any) => slide.el === imageElement.parentElement.parentElement);
        const selectedEventName = this.listaEventos[currentSlideIndex].nombre;
        console.log("holi",selectedEventName)
        this.eventosSharedService.setSelectedEventName(selectedEventName);
      });
    });
  }
}
