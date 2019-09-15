import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-dashboard',
  templateUrl: './charts-dashboard.component.html',
  styleUrls: ['./charts-dashboard.component.css']
})
export class ChartsDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Area Chart';
  type = 'AreaChart';
  data = [
    ["2013", 1000, 400],
    ["2014", -1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540]
  ];
  columnNames = ['Year', 'Sales', "Expenses"];
  options = {
    backgroundColor: 'darkgrey'
  };
  titleBuble = 'Age vs Weight';
  typeBuble = 'BubbleChart';
  dataBuble = [
    ["", 8, 12],
    ["", 4, 5.5],
    ["", 11, 14],
    ["", 3, 3.5],
    ["", 6.5, 7]
  ];
  columnNamesBuble = ['Id', 'Age', 'Weight'];

  titleCombination = 'Fruits distribution';
   typeCombination = 'ComboChart';
   dataCombination = [
      ["Apples", 3, 2, 2.5],
      ["Oranges",2, 3, 2.5],
      ["Pears", 1, 5, 3],
      ["Bananas", 3, 9, 6],
      ["Plums", 4, 2, 3]
   ];
   columnNamesCombination = ['Fruits', 'Jane','Jone','Average'];
   optionsCombination = {   
    backgroundColor: 'darkgrey',
      hAxis: {
         title: 'Person'
      },
      vAxis:{
         title: 'Fruits'
      },
      seriesType: 'bars',
      series: {2: {type: 'line'}}
   };

}
