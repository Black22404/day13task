import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {

  //for data fromurl
  route: ActivatedRoute = inject(ActivatedRoute);
    // for getting datat from servcie
  userserve = inject(UserserviceService )

  user :User |undefined;

  constructor() {
    const userid = Number(this.route.snapshot.params['id']);
    this.user = this.userserve.getuserbyid(userid);
  }

}
