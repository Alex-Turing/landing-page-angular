import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'id-input',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnChanges{

  @Input() typeOfId?: string;
  docForm: FormGroup;
  

  constructor(private _form:FormBuilder){
    this.docForm = this._form.group({
      id: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['typeOfId'].currentValue);
  }

  hasErrors(controlName:string, errorType:string){
    return this.docForm.get(controlName)?.hasError(errorType) && this.docForm.get(controlName)?.touched
  }

}
