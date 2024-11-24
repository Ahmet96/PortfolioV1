import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from "../about-me/about-me.component";
import { HeaderComponent } from "../header/header.component";
import { SkillsComponent } from "../skills/skills.component";
import { FooterComponent } from "../footer/footer.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectsComponent } from "../projects/projects.component";
import { EducationComponent } from "../education/education.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    AboutMeComponent, 
    HeaderComponent, 
    SkillsComponent, 
    FooterComponent, 
    ExperienceComponent, 
    ProjectsComponent, 
    EducationComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'cv';
}
