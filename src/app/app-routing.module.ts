import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MidtermExamComponent } from './midterm-exam/midterm-exam.component';

const routes: Routes = [
  {
    path:'', component:MidtermExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
