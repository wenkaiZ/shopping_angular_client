import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { JokeService } from '../joke.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  joke : String;
  constructor(private dialogRef: MatDialogRef<GameComponent>) { 
    this.joke = JokeService.pickone();
  }

  ngOnInit() {
    this.Close();
  }
  Close(){
    console.log("finished");
    setInterval(() => this.dialogRef.close(),10000);
  }
  Change(){
    this.joke = JokeService.pickone();
  }
}
