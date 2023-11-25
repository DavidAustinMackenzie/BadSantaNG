import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BadSanta } from './models/bad-santa';
import { BadSantaService } from './services/bad-santa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FontAwesomeModule,
    FormsModule,
    HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BadSantaNG';
  badSantas: BadSanta[] = [];
  badSantaService: BadSantaService;

  constructor(private badSantaService: BadSantaService) {
    this.badSantaService = badSantaService;
  }
  
  ngOnInit(): void{
    this.badSantaService
    .getBadSantas()
    .subscribe((result: BadSanta[]) =>
    (this.badSantas = result))
  }
}