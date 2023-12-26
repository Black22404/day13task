import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { ErrorComponent } from './error/error.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EditComponent } from './edit/edit.component';
import { TempdrivneformComponent } from './tempdrivneform/tempdrivneform.component';
import { ReactiveformexpComponent } from './reactiveformexp/reactiveformexp.component';

const routes: Routes = [

  { path: '', component: ListuserComponent },
  
  { path: 'add', component: AdduserComponent },

 
  { path: 'view/:id', component: ViewuserComponent },

  { path: 'edit/:id', component: EditComponent },

  { path: 'simple', component: TempdrivneformComponent },

  { path: 'react', component: ReactiveformexpComponent },

  //last one
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
