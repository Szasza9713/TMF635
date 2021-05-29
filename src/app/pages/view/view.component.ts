import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UsageService } from 'src/app/services/usage.service';
import { Usage } from 'src/app/shared/models/usage.model';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  list: Observable<Usage[]> | null = null;

  constructor(private us : UsageService) {  }

  ngOnInit(): void {
    this.list = this.us.get('usages');
  }

}
