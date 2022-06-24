import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  faChartLine = faChartLine;

  trendingData = [
    {
      id: '01',
      title: 'Angular 14 !, The next big thing ?',
      description: 'Trending 1 description',
      image: 'https://picsum.photos/200/300?random=3',
      date: '2020-01-01',
      duration: '20 min',
      views: '1.5M',
      author: 'John Doe',
    },
    {
      id: '02',
      title: 'React vs Angular 2022',
      description: 'Trending 2 description',
      image: 'https://picsum.photos/200/300?random=2',
      date: '2020-02-01',
      duration: '15 min',
      views: '1.2M',
      author: 'John King',
    },
    {
      id: '03',
      title: 'Vue vs Angular',
      description: 'Trending 3 description',
      image: 'https://picsum.photos/200/300?random=1',
      date: '2020-03-01',
      duration: '10 min',
      views: '1.1M',
      author: 'sam Doe',
    },
    {
      id: '04',
      title: 'Angular 14 best practises',
      description: 'Trending 4 description',
      image: 'https://picsum.photos/200/300?random=4',
      date: '2020-04-01',
      duration: '15 min',
      views: '1M',
      author: 'Sreehari Prathap',
    },
    {
      id: '05',
      title: 'Javascript best practises',
      description: 'Trending 5 description',
      image: 'https://picsum.photos/200/300?rando=5',
      date: '2020-05-01',
      duration: '20 min',
      views: '1M',
      author: 'Batman',
    },
    {
      id: '06',
      title: 'The world of jamstack',

      description: 'Trending 6 description',
      image: 'https://picsum.photos/200/300?random',
      date: new Date('2020-06-01'),
      duration: '25 min',
      views: '1M',
      author: 'Super Saiyan',
    },
    {
      id: '07',
      title: 'Vue the end ?',
      description: 'Trending 7 description',
      image: 'https://picsum.photos/200/300?random=7',
      date: '2020-07-01',
      duration: '30 min',
      views: '1M',
      author: 'Sam Nixon',
    },
    {
      id: '08',
      title: 'Angular the end ?',
      description: 'Trending 8 description',
      image: 'https://picsum.photos/200/300?random=8',
      date: '2020-08-01',
      duration: '35 min',
      views: '1M',
      author: 'Pierce Brosnan',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
