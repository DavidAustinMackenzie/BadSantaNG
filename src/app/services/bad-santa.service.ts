import { Injectable } from '@angular/core';
import { BadSanta } from '../models/bad-santa';
import { Observable} from 'rxjs/internal/Observable'
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class BadSantaService {

  constructor(private homeComponent: HomeComponent) {}
  
  public getBadSantas( ): Observable<BadSanta[]> {
    return this.homeComponent.getBadSantas();
  }
}
