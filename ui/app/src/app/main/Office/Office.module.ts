import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {OFFICE_MODULE_DECLARATIONS, OfficeRoutingModule} from  './Office-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    OfficeRoutingModule
  ],
  declarations: OFFICE_MODULE_DECLARATIONS,
  exports: OFFICE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OfficeModule { }