import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  faStar = faStar;
  faBookmark = faBookmark;
  post ={
    title: 'World under threat from new coronavirus',
    description : 'Post Description -is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/200/300/?random',
    author : 'John Doe',
    date : '2020-01-01',
    duration : '10 Minutes',
    views : '100',
    topic: 'Psycology',
    authorImage: 'https://picsum.photos/200/300/?random=1',

  }

  constructor() { }

  ngOnInit(): void {
  }

}
