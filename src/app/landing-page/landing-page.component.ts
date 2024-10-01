import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { type BuilderContent } from '@builder.io/sdk-angular';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  apiKey = '499d1b35754f499db22cae2eaf086006';
  model = 'page';
  content: BuilderContent | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.content = data.content;
    });
  }

}
