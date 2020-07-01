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

  // To switch between player One and Two
  canPlay: boolean;
  // Array than "contains" matches
  matches: Array<number>;

  messageWinner: boolean;
  messageText: string;

  ngOnInit(): void {
    // Intialize the number of matches for the game
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

    // To Reset  the toggle buttons when clicked
    event.source.buttonToggleGroup.value = null;
    // To switch to the next player
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

  // When the game ends, the players can reset the matches
  reset(): void{
    this.matches = Array(20).fill(0);
    this.messageWinner = false;
    this.canPlay = false;
  }

}
