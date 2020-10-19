import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { PhotoComponent } from './layouts/photo/photo.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DemoComponent } from './modules/demo/demo.component';
import { ForgetPassComponent } from './modules/forget-pass/forget-pass.component';
import { LogInComponent } from './modules/log-in/log-in.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';

const routes: Routes = [{
  path:'',
  component : DefaultComponent,
  children: [{
    path:'',
    component : DashboardComponent
  },
    {
      path:'post',
      component: PostsComponent
      
    }
]

},
{
  path:'login',
  component : PhotoComponent,
  children: [{
    path:'',
    component : LogInComponent
  },
  {
    path:'signUp',
    component : SignUpComponent,
  },
  
  {
    path:'forgetPass',
    component : ForgetPassComponent,
  },

]

},

{
  path: 'demo',
  component: DemoComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
