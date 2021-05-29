import { Injectable } from '@angular/core';
import { FbBaseService } from './fb-base.service';
import { Usage } from 'src/app/shared/models/usage.model';

@Injectable({
  providedIn: 'root'
})
export class UsageService extends FbBaseService<Usage>{

}
