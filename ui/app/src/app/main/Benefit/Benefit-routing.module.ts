import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitHomeComponent } from './home/Benefit-home.component';
import { BenefitNewComponent } from './new/Benefit-new.component';
import { BenefitDetailComponent } from './detail/Benefit-detail.component';

const routes: Routes = [
  {path: '', component: BenefitHomeComponent},
  { path: 'new', component: BenefitNewComponent },
  { path: ':id', component: BenefitDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Benefit-detail-permissions'
      }
    }
  }
];

export const BENEFIT_MODULE_DECLARATIONS = [
    BenefitHomeComponent,
    BenefitNewComponent,
    BenefitDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenefitRoutingModule { }