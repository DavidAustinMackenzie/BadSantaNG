import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadSanta } from '../models/bad-santa';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
  id = 1;
  name = "";
  place = '?';
  clicked = false;
  count = 1;
  badSantas: any[] = [];
  numbers: string[] = [];
  people = 10;

  onGenerateNumber() {
    //this.place = Math.floor((Math.random() * 10) + 1).toString();
    if(this.numbers.length < this.people)
    {
      const randomNumber = this.uniqueNumber(this.people);
      console.log(randomNumber);
      console.log(this.numbers);
      this.place = randomNumber?.toString()!;
  
      var badSanta = new BadSanta();
      badSanta.id = 1;
      badSanta.name = this.name;
      badSanta.place = parseInt(this.place);
      this.badSantas.push(badSanta);
    }
  }

  onMousedown() {
    this.clicked = true;
  }

  onMouseup() {
    this.clicked = false;
  }  

  onNewList(){
    this.badSantas = [];
    this.numbers = [];
    this.id = 1;
    this.count = 1;
    this.place = '?'
    this.people = 10;
  }
  public getBadSantas(): any[]{
    return this.badSantas;
  }

  uniqueNumber = (maxVal:number) => 
  {
    var number = Math.floor((Math.random() * maxVal) + 1).toString();
    if (!this.numbers.includes(number)) 
    {
       this.numbers.push(number);
    }
     
    return number;
  }
}




