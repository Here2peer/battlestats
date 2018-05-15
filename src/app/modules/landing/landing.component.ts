import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe((data: any) => {
      console.log(data);
    });
  }

}
