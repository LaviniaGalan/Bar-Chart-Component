import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() data: Array<any>;
  @Input() theme?: String;
  @Input() direction?: String;

  total = 0;
  maxHeight = 300;
  lineWidth = "";
  isVertical = true;

  ngOnInit() {
    let defaultColor: String;
    if(this.theme === "dark"){
      defaultColor = "black";
    } else if (this.theme === "light") {
      defaultColor = "white";
    } else {
      defaultColor = "grey";
    }
    if(this.direction === "horizontal"){
      this.isVertical = false;
    }
    this.data.forEach(element => {
          this.total += element.value;
          if (!element.color){
            element.color = defaultColor;
          }
        });

    this.data.forEach(element => {
      element.size = Math.round((element.value * this.maxHeight) / this.total) + "%";
    });

    this.lineWidth = this.data.length * 100 + "px";
  }

  setDescription(i: number) {
    var dialogDescription = document.getElementById("dataDescription");
    if (dialogDescription !== null){
      var description = this.data[i].description;
      if(description === undefined) {
        dialogDescription.innerHTML = "No information provided!";
      }
      else {
        dialogDescription.innerHTML = description;
      }
    }
  }

}
