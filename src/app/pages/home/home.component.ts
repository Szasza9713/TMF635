import { Component, OnInit } from '@angular/core';
import { USAGE } from 'src/app/shared/database/usage.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page = '';
  usages = USAGE;
  constructor() { }

  ngOnInit(): void {
  }

}
