import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  providers: [DatePipe]
})

export class AboutMeComponent {
  name: string = 'Ahmet Ozturk Sakalli';
  jobTitle: string = 'Software Developer';
  description: string = 'Since 2021, I have been working as a software developer at Creditwest Bank. I have been actively involved in the industry for 4 years and coding for 7 years. As a software developer, my areas of interest are full-stack development and the conveniences brought by new technologies :). If you see me offline, understand that I am either watching something, traveling, or researching something new.';

  today: Date = new Date();
  industryDate: Date = new Date('2020,11,1')
  codingDate: Date = new Date('2017,1,1')


  constructor(private http: HttpClient,private datePipe: DatePipe) {}

  getIndustryDate():number {
    const today = this.today.getFullYear();
    const industryDate = this.industryDate.getFullYear();
    return today - industryDate;
  }

  getCodingDate():number {
    const today = this.today.getFullYear();
    const codingDate = this.codingDate.getFullYear();
    return today - codingDate;
  }
  
}
    