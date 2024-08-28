import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BloglistingComponent } from './bloglisting/bloglisting.component';
import { BlogComponent } from './blog/blog.component';
import { BlogaddnewComponent } from './blogaddnew/blogaddnew.component';
import { BlogupdateComponent } from './blogupdate/blogupdate.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "blog", component: BlogComponent,
    children: [
      { path: "", component: BloglistingComponent },
      { path: "create", component:BlogaddnewComponent },
       { path: "edit/:id", component:BlogaddnewComponent },
      //{ path: "edit/:id", component:BlogupdateComponent },
      { path: "cancel", component:BloglistingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
