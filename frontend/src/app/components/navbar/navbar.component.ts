import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked
} from '@angular/core';
import { Offcanvas } from 'bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewChecked {
  isAuthenticated!: boolean;
  private authSubscription!: Subscription;
  private isLinksInitialized = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authSubscription = this.authService
      .getAuthStatus()
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  ngAfterViewChecked(): void {
    if (!this.isLinksInitialized) {
      this.initializeLinkItems();
    }
  }

  initializeLinkItems(): void {
    const linkItems: NodeListOf<Element> = document.querySelectorAll(".link-item");
    const indicator: HTMLElement = document.querySelector(".indicator") as HTMLElement;

    if (linkItems.length > 0) {
      this.isLinksInitialized = true;
      linkItems.forEach((linkItem: Element, index: number) => {
        linkItem.addEventListener("click", () => {
          document.querySelector(".active")!.classList.remove("active");
          linkItem.classList.add("active");

          indicator.style.left = `${index * 95 + 48}px`;
        });
      });
    }
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  openOffCanvas(offcanvasId: string) {
    const offCanvasElement = document.getElementById(offcanvasId)!;
    const offCanvas = new Offcanvas(offCanvasElement);
    offCanvas.show();
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/eventowasimodo']);
  }
}