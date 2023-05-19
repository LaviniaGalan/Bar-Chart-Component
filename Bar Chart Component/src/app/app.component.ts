import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fd-project';

  public eurovisionScores : Array<any> = [
    {label : "Finland", value: 526, description: "The Finnish singer Kaarija got the first place on televote. His song was Cha Cha Cha."},
    {label : "Israel", value: 326, description: "Noa Kirel represented Israel with the song 'Unicorn'.", color:"pink"},
    {label : "Sweden", value: 583, description: "Loreen won the Eurovision Song Contest with her song, 'Tattoo'."},
    //{label : "Italy", value: 350, description: "The song 'Due Vite' by the Italian singer Marco Mengoni was an emotional and beautiful ballad."},
    {label : "Norway", value: 268},
    {label : "Moldova", value: 96, description: "Pasha Parfeni got the 18th place with his song 'Soarele si luna'."}
  ];
  public theme = "dark";
}
