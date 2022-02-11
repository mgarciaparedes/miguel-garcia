import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css']
})
export class ThirdSectionComponent implements OnInit {

  text ="<!-- Love to bring new ways in which users can do things faster with a meaning experience. Frameworks and tools i've got experience with: -->";
  ptag = "<p>";
  ptag2 = "</p>";

  text_backend = "/* Saving and protect the data of every system is important. Frameworks and tools i've got experience with:  */";
  keytag = "{";
  keytag2="}";
  
  constructor() { }

  ngOnInit(): void {
  }

}
