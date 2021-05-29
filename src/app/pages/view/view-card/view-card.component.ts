import { Component, Input, OnInit } from '@angular/core';
import { Usage } from 'src/app/shared/models/usage.model';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
  @Input() usage?: Usage;
  
  constructor() { }

  ngOnInit(): void {
  }

}
