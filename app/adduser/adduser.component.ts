import { Component, OnInit, inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray   } from '@angular/forms';
import { Hero } from '../hero';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {



   myHero =  new Hero(42, 'SkyDog',
  'Fetch any object at any distance',
  'Leslie Rollover');
// "My hero is called SkyDog"

/*
profileForm = new FormGroup({
name = new FormControl('');
age = new FormControl('');
});
*/


profileForm2 = this.formBuilder.group({
  firstName: ['' ,Validators.required],
  lastName: [''],
  address: this.formBuilder.group({
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
  }),  
  aliases: this.formBuilder.array([this.formBuilder.control('')]),
   });


   get aliases() {
    return this.profileForm2.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

profileForm = new FormGroup({
  firstName: new FormControl('' , Validators.nullValidator),
  lastName: new FormControl('' , Validators.nullValidator),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  }),
});


profile = new FormGroup({
  firstName: new FormControl('' , Validators.nullValidator),
  lastName: new FormControl('' , Validators.nullValidator),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  }),
  alla: new FormArray([]),
});
updateProfile() {
  this.profileForm2.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street',
    },
  });
}

onSubmit2() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm2.value);
}

updateName() {

}

  // hero data

  newHero() {
    this.model = new Hero(42, '', '');
  }

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');


  //
 
  user! : User[];

  
  userservce :UserserviceService = inject(UserserviceService);
  

  userform! : FormGroup;

  
  
  constructor(private formBuilder: FormBuilder) {
    
    this.userform =  this.formBuilder.group({
      name:['' ],
      age :[''],
      email:[''],
      add:[''],
      password:[''],

    })

    this.user =  this.userservce.getallusers();

  }

  adduser(){

  const user :User = this.userform.value;
  this.userservce.createuser(user);
  console.log(user);

  }

submit(){




  }
}

 



