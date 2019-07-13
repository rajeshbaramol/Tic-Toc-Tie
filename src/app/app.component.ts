import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isbot = false;
  bot = [];
  man = [];

  title = 'tictoctie';
  fRow = [4, 9, 2];
  sRow = [3, 5, 7];
  tRow = [8, 1, 6];
  harr = [4, 5, 6];
  zarr = [2, 5, 8];
  r1 = [4, 3, 8];
  r2 = [9, 5, 1];
  r3 = [2, 7, 6];
  count = 1;
  matchwin = false;
  allarr = [this.fRow, this.sRow, this.tRow, this.harr, this.zarr, this.r1, this.r2, this.r3];
  username = "Player1";

  clickd(e) {

    if (!e.currentTarget.clicked) {

      if (this.count >= 9) {
        alert("draw")
      } if (this.count < 10 && !this.matchwin) {
        this.count++;
        this.isbot ? this.bot.push(Number(e.currentTarget.attributes.value.value)) : this.man.push(Number(e.currentTarget.attributes.value.value));
        this.isbot = !this.isbot;
        e.currentTarget.textContent = this.isbot ? "X" : "O";
        e.currentTarget.clicked = true;
        this.bot.filter((e) => { return this.fRow.includes(e) })
        this.allarr.forEach(arr => {
          if (!this.matchwin) {
            (this.man.filter((e) => { return arr.includes(e) })).length > 2 ? (setTimeout(() => { alert(this.username + " Won") }, 0), this.matchwin = true) : "";
          } if (!this.matchwin) {
            (this.bot.filter((e) => { return arr.includes(e) })).length > 2 ? (setTimeout(() => { alert("Bot Won") }, 0), this.matchwin = true) : "";
          }

        })
      }
    }
  }
}
