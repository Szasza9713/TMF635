import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsageService } from 'src/app/services/usage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    description: new FormControl(''),
    href: new FormControl(''),
    id: new FormControl(''),
    status: new FormControl(''),
    usageDate: new FormControl(''),
    usageType: new FormControl(''),
  });

  showMsg: boolean = false;

  constructor(private usageService : UsageService) { }

  ngOnInit(): void {
  }

  submit(): void {
    if(this.form.valid){
      this.usageService.add('usages',this.form.value);
      this.form.reset();
      this.showMsg= true;
    }
  }

}

