import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './component/search/search.component'

import { ErrorComponent } from './routes/error/error.component'
import { UserComponent } from './routes/user/user.component'

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'oops',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
