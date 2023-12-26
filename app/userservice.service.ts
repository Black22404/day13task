import { Injectable } from '@angular/core';
import { User } from './user';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {



//logic

  constructor() { }

// get all user
  getallusers():User[]{

    return this.users;
  }

  
// get specific by id user
getuserbyid(id:number):User |undefined{

    return this.users.find( user => user.id === id );
}


deleteuser(id:number){

 const index = this.users.findIndex((user => user.id === id));
 this.users.splice(index,1);

}

usercount():number{

  return this.users.length;
}

 nextid = 5;

createuser(user :User){
  user.id = this.nextid++;
  this.users.push(user);
}

updateuser(userid:number , updateduser: User ){

  const index  =  this.users.findIndex(  user => user.id === userid);

  this.users[index] = {...updateduser , id : userid   }


}



//data
 private users :User[]= [

    {
        id:1,
        name:"ahmed",
        age:"20",
        email:"ahmedmegahedcyc@gmail.com",
        password:"123",
        add:"ahm"
    },
    {
      id:2,
      name:"hassan",
      age:"20",
      email:"ahmedmegahedcyc@gmail.com",
      password:"123",
      add:"ahm"
  },
  {
    id:3,
    name:"Tamer",
    age:"20",
    email:"ahmedmegahedcyc@gmail.com",
    password:"123",
    add:"ahm"
},
{
  id:4,
  name:"Ehab",
  age:"20",
  email:"ahmedmegahedcyc@gmail.com",
  password:"123",
  add:"ahm"
},


  ]
}
