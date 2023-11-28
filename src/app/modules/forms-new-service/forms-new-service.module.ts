import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsNewServiceRoutingModule } from './forms-new-service-routing.routing';
import { FormsNewServiceComponent } from './forms-new-service.component';
import { GlobalModule } from '../global.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [FormsNewServiceComponent],
  imports: [
    CommonModule,
    GlobalModule,
    FormsNewServiceRoutingModule,
  ],
  providers: [
    MessageService,
  ],
})
export class FormsNewServiceModule { }
