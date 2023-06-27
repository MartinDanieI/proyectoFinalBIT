import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-eventos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosGrillaComponent implements AfterViewInit {
    @ViewChild('items') itemsRef!: ElementRef;
    @ViewChild('eventos') eventosRef!: ElementRef;
    constructor() { }

    ngAfterViewInit() {
        const items = this.itemsRef.nativeElement.querySelectorAll("li.letrasUL");
        const eventos = this.eventosRef.nativeElement.querySelectorAll(".item");

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("mouseenter", () => {
                eventos[i].classList.add("claseflexbasicsenter");
            });
            items[i].addEventListener("mouseleave", () => {
                eventos[i].classList.remove("claseflexbasicsenter");
            });
        }
    }
}
