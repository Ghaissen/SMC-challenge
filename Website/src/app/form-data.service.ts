import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formValues: any;
  setFormValues(values: any) {
    this.formValues = values;
  }

  getFormValues() {
    return this.formValues;
  }

  constructor() { }
}
