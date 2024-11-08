import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BENEFIT_MODULE_DECLARATIONS, BenefitRoutingModule} from  './Benefit-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BenefitRoutingModule
  ],
  declarations: BENEFIT_MODULE_DECLARATIONS,
  exports: BENEFIT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BenefitModule { }