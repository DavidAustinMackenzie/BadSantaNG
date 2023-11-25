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
  name: string = "";
  place = '?';
  clicked = false;
  count = 1;
  badSantas: BadSanta[] = [];
  numbers: string[] = [];
  people = 10;
  errorMessage = "";

  onGenerateNumber() {
    if(this.numbers.length < this.people)
    {
      var randomNumber = this.getRandomNumber(this.people);
      if(this.checkRandomNumberExists(randomNumber))
      {
        do{
          randomNumber = this.getRandomNumber(this.people);
        }while(this.checkRandomNumberExists(randomNumber))
      }
      
      console.log(randomNumber);
      console.log(this.numbers);
      this.numbers.push(randomNumber);
      this.place = randomNumber?.toString()!;
  
      var badSanta = new BadSanta();
      badSanta.id = this.numbers.length;
      badSanta.name = this.name;
      badSanta.place = parseInt(this.place);
      this.badSantas.push(badSanta);
      console.log(this.badSantas);
    }
    else
    {
      this.errorMessage = "Cannot generate anymore draw numbers";
      console.log(this.numbers);
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

  getRandomNumber = (maxVal:number) => 
  {
    var number = Math.floor((Math.random() * maxVal) + 1).toString();
         
    return number;
  }

  checkRandomNumberExists(randomNumber:string)
  {
    if(this.numbers.includes(randomNumber))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  onNameKeyEvent(event: any) 
  { 
    this.name = event.target.value;
  }

  onPeopleKeyEvent(event: any) 
  { 
    this.people = parseInt(event.target.value);
  }
}




