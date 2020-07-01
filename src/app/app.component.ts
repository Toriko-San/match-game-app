import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog){}

  title = 'match-game-app';

  canPlay: boolean;
  messageWinner: boolean;
  matches: Array<number>;
  messageText: string;

  ngOnInit(): void {
    this.matches = Array(20).fill(0);
    this.canPlay = false;
    this.messageWinner = false;
  }

  playGame(Player: string, event: any): void{

    if (this.matches.length > event.value){
      this.matches.length = this.matches.length - event.value;
    }
    else{
      this.matches.length = 0;
    }

    event.source.buttonToggleGroup.value = null;
    this.canPlay = !this.canPlay;

    if (this.matches.length === 0){
      this.messageWinner = true;
      if (Player === 'PlayerOne'){
        this.messageText = 'The winner is the player TWO';
      }
      else{
        this.messageText = 'The winner is the player ONE';
      }
    }

  }

  reset(): void{
    this.matches = Array(20).fill(0);
    this.messageWinner = false;
    this.canPlay = false;
  }

}
