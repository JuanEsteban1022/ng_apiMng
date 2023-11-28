import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsNewServiceComponent } from './forms-new-service.component';

const routes: Routes = [
  {
    path: '',
    component: FormsNewServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsNewServiceRoutingModule { }
