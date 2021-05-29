import { Component, Input, OnInit } from '@angular/core';
import { UsageService } from 'src/app/services/usage.service';
import { Usage } from 'src/app/shared/models/usage.model';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
  @Input() usage?: Usage;

  constructor(private us: UsageService) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.us.delete('usages', this.usage?.id ? this.usage?.id : '');
  }

}
