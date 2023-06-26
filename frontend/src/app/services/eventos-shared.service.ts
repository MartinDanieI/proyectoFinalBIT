import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosSharedService {

  private selectedEventName = new BehaviorSubject<string>('');
  selectedEventName$: any;

  setSelectedEventName(name: string) {
    this.selectedEventName.next(name);
  }

  getSelectedEventName() {
    return this.selectedEventName.asObservable();
  }

  constructor() { }
}
