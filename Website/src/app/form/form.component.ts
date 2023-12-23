import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{ Router  } from '@angular/router'
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  

    surveyForm: FormGroup;
  
    //constructor(private fb: FormBuilder ,private router :Router) {
     // this.surveyForm = this.fb.group({
        //mentalWellBeing: [''],
       // stressFrequency: [''],
        //anxietyFrequency: [''],
        //lowMoodFrequency: [''],
        //selfEsteem: [''],
        //physicalHealth: [''],
        //exerciseFrequency: [''],
        //eatingHabits: [''],
        //socialLifeSatisfaction: [''],
        //groupActivitiesFrequency: [''],
        //comfortInSchool: ['']
      //});
    //}
    constructor(private formDataService: FormDataService, private router: Router ,private fb: FormBuilder) {
      this.surveyForm = this.fb.group({
        mentalWellBeing: [''],
        stressFrequency: [''],
        anxietyFrequency: [''],
        lowMoodFrequency: [''],
        selfEsteem: [''],
        physicalHealth: [''],
        exerciseFrequency: [''],
        eatingHabits: [''],
        socialLifeSatisfaction: [''],
        groupActivitiesFrequency: [''],
        comfortInSchool: ['']
      })
    }
  
    submitForm() {
       // Gather all the values from the form
    const formValues = this.surveyForm.value;
    this.formDataService.setFormValues(formValues);

    // Navigate to the "tips" route and pass form values as parameters
    this.router.navigate(['/tips'], { state: { formValues } });
    }
  

}
