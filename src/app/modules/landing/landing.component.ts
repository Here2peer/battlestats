import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  news: any;
  img: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
     const data = this.newsService.fetch('GET').then( res => {
       this.news = res['appnews']['newsitems'];
       const reg = new RegExp('/(https?:\\/\\/[^\\s]+)/g');
       this.img = reg.exec(this.news['contents']);
       console.log(this.img);
       console.log(this.news);
     });
  }

}
