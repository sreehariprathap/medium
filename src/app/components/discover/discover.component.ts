import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  topics = [
    { id: 1, name: 'Self' },
    { id: 2, name: 'Family' },
    { id: 3, name: 'Friends' },
    { id: 4, name: 'Career' },
    { id: 5, name: 'Health' },
    { id: 6, name: 'Education' },
    { id: 7, name: 'Relationship' },
    { id: 8, name: 'Productivity' },
    { id: 9, name: 'Travel' },
    { id: 10, name: 'Politics' },
    { id: 11, name: 'Sports' },
    { id: 12, name: 'Music' },
    { id: 13, name: 'Fashion' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
