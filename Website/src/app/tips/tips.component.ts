import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
 styleUrls: ['./tips.component.css']
})

export class TipsComponent {
  formValues: any;

  constructor(private formDataService: FormDataService) {
    this.formValues = this.formDataService.getFormValues();
  }

}
