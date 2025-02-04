import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PERFORMANCEREVIEW_MODULE_DECLARATIONS, PerformanceReviewRoutingModule} from  './PerformanceReview-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PerformanceReviewRoutingModule
  ],
  declarations: PERFORMANCEREVIEW_MODULE_DECLARATIONS,
  exports: PERFORMANCEREVIEW_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PerformanceReviewModule { }