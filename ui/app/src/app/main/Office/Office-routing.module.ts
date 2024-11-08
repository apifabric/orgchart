import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeHomeComponent } from './home/Office-home.component';
import { OfficeNewComponent } from './new/Office-new.component';
import { OfficeDetailComponent } from './detail/Office-detail.component';

const routes: Routes = [
  {path: '', component: OfficeHomeComponent},
  { path: 'new', component: OfficeNewComponent },
  { path: ':id', component: OfficeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Office-detail-permissions'
      }
    }
  }
];

export const OFFICE_MODULE_DECLARATIONS = [
    OfficeHomeComponent,
    OfficeNewComponent,
    OfficeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }