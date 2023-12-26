import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-tempdrivneform',
  templateUrl: './tempdrivneform.component.html',
  styleUrls: ['./tempdrivneform.component.css']
})
export class TempdrivneformComponent {

powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;
          
onSubmit() { this.submitted = true; }

constructor(){

const myHero =  new Hero(42, 'SkyDog',
                       'Fetch any object at any distance',
                       'Leslie Rollover');
console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
}


newHero() {
  this.model = new Hero(42, '', '');
}

}
