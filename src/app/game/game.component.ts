import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<GameComponent>) { }

  ngOnInit() {
    this.Close();
  }
  Close(){
    console.log("finished");
    setInterval(() => this.dialogRef.close(),10000);
  }
}
