import { ElementRef, Renderer2 } from '@angular/core';

// ...

const items: NodeListOf<Element> = document.querySelectorAll("li.letrasUL");
const eventos: NodeListOf<Element> = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", () => {
    eventos[i].classList.add("claseflexbasicsenter");
  });
  items[i].addEventListener("mouseleave", () => {
    eventos[i].classList.remove("claseflexbasicsenter");
  });
}
