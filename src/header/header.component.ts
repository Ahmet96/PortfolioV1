import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

public myName!:string;
public title!:string;

constructor() {
}

  ngOnInit(): void {
   this.myName = "Ahmet Ozturk Sakalli"
   this.title = "Software Engineer"

  }

}
