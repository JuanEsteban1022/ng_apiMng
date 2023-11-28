import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalModule } from '../global.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GlobalModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
