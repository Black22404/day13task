import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformexp',
  templateUrl: './reactiveformexp.component.html',
  styleUrls: ['./reactiveformexp.component.css']
})
export class ReactiveformexpComponent {


  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

//

profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  }),
});


onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}

profileFormBuilder = this.formBuilder.group({
  firstName: ['' , Validators.required],
  lastName: [''],
  address: this.formBuilder.group({
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
  }),
});

onSubmitbuilder() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileFormBuilder.value);
}


profileFormBarray = this.formBuilder.group({
  firstName: ['', Validators.required],
  lastName: [''],
  address: this.formBuilder.group({
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
  }),
  aliases: this.formBuilder.array([this.formBuilder.control('')]),
  user  :  this.formBuilder.array([this.formBuilder.control('')]),
});


onSubmitbuilderarray() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileFormBuilder.value);
}

get aliases() {
  return this.profileFormBarray.get('aliases') as FormArray;
}

get user() {
  return this.profileFormBarray.get('user') as FormArray;
}

addAlias() {
  this.aliases.push(this.formBuilder.control(''));
}

addUser() {
  this.user.push(this.formBuilder.control(''));
}

constructor(private formBuilder: FormBuilder) {}

}
