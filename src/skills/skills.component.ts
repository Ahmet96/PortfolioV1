import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']  // Dikkat: styleUrls
})


export class SkillsComponent implements AfterViewInit {
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  // AfterViewInit ile bileşen görselleştikten sonra çalıştırıyoruz
  ngAfterViewInit() {
    this.skillBars.forEach((bar: ElementRef) => {
      const element = bar.nativeElement;
      const width = element.style.width;
      element.style.width = '0';
      setTimeout(() => {
        element.style.width = width;
      }, 100);
    });
  }
}
