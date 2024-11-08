import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentHomeComponent } from './home/Assignment-home.component';
import { AssignmentNewComponent } from './new/Assignment-new.component';
import { AssignmentDetailComponent } from './detail/Assignment-detail.component';

const routes: Routes = [
  {path: '', component: AssignmentHomeComponent},
  { path: 'new', component: AssignmentNewComponent },
  { path: ':id', component: AssignmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Assignment-detail-permissions'
      }
    }
  }
];

export const ASSIGNMENT_MODULE_DECLARATIONS = [
    AssignmentHomeComponent,
    AssignmentNewComponent,
    AssignmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }