import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsageService } from 'src/app/services/usage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: Observable<string> | undefined;
  param = "";
  data: Observable<any> | undefined;

  form: FormGroup = new FormGroup({
    description: new FormControl(''),
    href: new FormControl(''),
    id: new FormControl(''),
    status: new FormControl(''),
    usageType: new FormControl(''),
  });

  showMsg: boolean = false;

  constructor(private ar: ActivatedRoute, private us: UsageService) { 
    this.id = this.ar.params.pipe(map((p) => p.id));
  }

  ngOnInit(): void {
    this.id?.subscribe((r: string) => {
      this.param = r;
    });
    this.data = this.us.getById('usages',this.param);
    this.data?.subscribe(r => {
      this.form.patchValue(r);
    })
  }

  edit(): void {
    this.us.update('usages',this.param,this.form.value);
    this.showMsg= true;
  }

}
