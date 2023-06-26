import { Component, OnInit } from '@angular/core';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  initializeLinkItems(): void {
    const linkItems: NodeListOf<Element> = document.querySelectorAll(".link-item");
    const indicator: HTMLElement = document.querySelector(".indicator") as HTMLElement;

    linkItems.forEach((linkItem: Element, index: number) => {
      linkItem.addEventListener("click", () => {
        document.querySelector(".active")!.classList.remove("active");
        linkItem.classList.add("active");

        indicator.style.left = `${index * 95 + 48}px`;
      });
    });
  }

  openOffCanvas(offcanvasId: string) {
    const offCanvasElement = document.getElementById(offcanvasId)!;
    const offCanvas = new Offcanvas(offCanvasElement);
    offCanvas.show();
  }

  ngOnInit(): void {
    this.initializeLinkItems();
  }
}
